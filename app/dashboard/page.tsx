'use client';

import { useEffect, useState } from 'react';
import PostEditor from './post-editor';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { API_URL } from '@/lib/api';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [allUsers, setAllUsers] = useState<any[]>([]);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));

    // Fetch users if admin
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const token = localStorage.getItem('token');
    const u = JSON.parse(localStorage.getItem('user') || '{}');
    if (u.role === 'ADMIN') {
      const res = await fetch(`${API_URL}/users`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        setAllUsers(await res.json());
      }
    }
  };

  const approveUser = async (id: number) => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${API_URL}/users/${id}/approve`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` }
    });
    if (res.ok) {
      toast.success('User approved!');
      fetchUsers();
    }
  };

  const changeRole = async (id: number, role: string) => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${API_URL}/users/${id}/role`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}` 
      },
      body: JSON.stringify({ role })
    });
    if (res.ok) {
      toast.success(`Role changed to ${role}!`);
      fetchUsers();
    }
  };

  if (!user) return <div className="p-8 text-center">Please login to access dashboard.</div>;

  return (
    <div className="container mx-auto p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
        <div className="text-sm bg-secondary p-2 rounded">Role: {user.role}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
           <PostEditor />
        </div>

        {user.role === 'ADMIN' && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">User Management</h2>
            <div className="space-y-2">
              {allUsers.map((u) => (
                <Card key={u.id}>
                  <CardContent className="p-4 flex justify-between items-center">
                    <div>
                      <p className="font-medium">{u.name}</p>
                      <p className="text-xs text-muted-foreground">{u.email} - {u.role}</p>
                      {u.role === 'USER' && !u.isApproved && (
                        <span className="text-[10px] bg-yellow-100 text-yellow-800 px-1 rounded">Pending Approval</span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {u.role === 'USER' && !u.isApproved && (
                        <Button variant="outline" size="sm" onClick={() => approveUser(u.id)}>Approve</Button>
                      )}
                      <select 
                        className="text-xs border rounded p-1"
                        value={u.role}
                        onChange={(e) => changeRole(u.id, e.target.value)}
                      >
                        <option value="USER">USER</option>
                        <option value="TEACHER">TEACHER</option>
                        <option value="ADMIN">ADMIN</option>
                      </select>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
