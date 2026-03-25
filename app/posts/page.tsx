'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

import { API_URL } from '@/lib/api';

export default function PostsPage() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-8 space-y-8">
      <h1 className="text-4xl font-bold text-center">University News & Letters</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
            {post.imageUrl && (
              <div className="relative h-48 w-full">
                <img 
                  src={`${API_URL}${post.imageUrl}`} 
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <Badge variant="outline">{post.author.role}</Badge>
              </div>
              <CardDescription>By {post.author.name} • {new Date(post.createdAt).toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent className="grow">
              <p className="text-sm line-clamp-3">{post.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      {posts.length === 0 && <p className="text-center text-muted-foreground">No posts yet.</p>}
    </div>
  );
}
