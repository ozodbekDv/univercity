import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.post.findMany({
      include: { author: { select: { name: true, role: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    return this.prisma.post.findUnique({
      where: { id },
      include: { author: { select: { name: true, role: true } } },
    });
  }

  async create(data: any, user: any) {
    // Role check: Teacher and Admin can post. User can post if approved.
    if (user.role === 'USER' && !user.isApproved) {
      throw new ForbiddenException('User is not approved to write posts');
    }

    return this.prisma.post.create({
      data: {
        ...data,
        authorId: user.userId,
      },
    });
  }

  async remove(id: number, user: any) {
    const post = await this.prisma.post.findUnique({ where: { id } });
    if (!post) return null;

    if (user.role !== 'ADMIN' && post.authorId !== user.userId) {
      throw new ForbiddenException('Not authorized to delete this post');
    }

    return this.prisma.post.delete({ where: { id } });
  }
}
