'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { API_URL } from '@/lib/api';

export default function TeachersPage() {
  const [teachers, setTeachers] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/users/teachers`)
      .then((res) => res.json())
      .then((data) => setTeachers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-8 space-y-8">
      <h1 className="text-4xl font-bold text-center">Our Teachers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher) => (
          <Card key={teacher.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${teacher.name}`} />
                <AvatarFallback>{teacher.name?.[0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{teacher.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{teacher.email}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Specializing in university education and research.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
