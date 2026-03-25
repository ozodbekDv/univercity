import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOneByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findOneById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async create(data: any) {
    return this.prisma.user.create({ data });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findTeachers() {
    return this.prisma.user.findMany({ where: { role: 'TEACHER' } });
  }

  async updateRole(id: number, role: string) {
    return this.prisma.user.update({
      where: { id },
      data: { role },
    });
  }

  async approveUser(id: number) {
    return this.prisma.user.update({
      where: { id },
      data: { isApproved: true },
    });
  }
}
