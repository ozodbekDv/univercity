import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaService implements OnModuleInit {
  private users: any[] = [];
  private posts: any[] = [];
  private userIdCounter = 1;
  private postIdCounter = 1;

  async onModuleInit() {
    console.log('Mock Prisma Service Initialized');
    // Pre-seed an admin
    const bcrypt = require('bcrypt');
    const adminPassword = await bcrypt.hash('admin123', 10);
    this.users.push({
      id: 1,
      email: 'admin@uni.uz',
      password: adminPassword,
      name: 'Admin Owner',
      role: 'ADMIN',
      isApproved: true,
      createdAt: new Date(),
    });
    this.userIdCounter = 2;
  }

  user = {
    findUnique: async ({ where }: any) => {
      if (where.email) return this.users.find(u => u.email === where.email);
      if (where.id) return this.users.find(u => u.id === where.id);
      return null;
    },
    findMany: async (args?: any) => {
      if (args?.where?.role) return this.users.filter(u => u.role === args.where.role);
      return this.users;
    },
    create: async ({ data }: any) => {
      const newUser = { ...data, id: this.userIdCounter++, createdAt: new Date() };
      this.users.push(newUser);
      return newUser;
    },
    update: async ({ where, data }: any) => {
      const index = this.users.findIndex(u => u.id === where.id);
      if (index === -1) return null;
      this.users[index] = { ...this.users[index], ...data };
      return this.users[index];
    }
  };

  post = {
    findMany: async (args?: any) => {
      let result = this.posts.map(p => ({
        ...p,
        author: this.users.find(u => u.id === p.authorId)
      }));
      if (args?.orderBy?.createdAt === 'desc') {
        result.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      }
      return result;
    },
    findUnique: async ({ where }: any) => {
      const p = this.posts.find(p => p.id === where.id);
      if (!p) return null;
      return { ...p, author: this.users.find(u => u.id === p.authorId) };
    },
    create: async ({ data }: any) => {
      const newPost = { ...data, id: this.postIdCounter++, createdAt: new Date() };
      this.posts.push(newPost);
      return newPost;
    },
    delete: async ({ where }: any) => {
      const index = this.posts.findIndex(p => p.id === where.id);
      if (index === -1) return null;
      return this.posts.splice(index, 1)[0];
    }
  };
}
