'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

import { API_URL } from '@/lib/api';

export default function PostEditor() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('You must be logged in.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) formData.append('image', image);

    try {
      const res = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      if (res.ok) {
        toast.success('Post created successfully!');
        setTitle('');
        setContent('');
        setImage(null);
      } else {
        const data = await res.json();
        toast.error(data.message || 'Failed to create post.');
      }
    } catch (error) {
      toast.error('An error occurred.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-lg border">
      <h2 className="text-xl font-semibold">Write a Post</h2>
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="image">Image</Label>
        <Input id="image" type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} />
      </div>
      <Button type="submit">Publish Post</Button>
    </form>
  );
}
