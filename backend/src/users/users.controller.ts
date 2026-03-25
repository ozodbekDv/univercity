import { Controller, Get, Post, Body, Param, Put, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('teachers')
  getTeachers() {
    return this.usersService.findTeachers();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Put(':id/role')
  updateRole(@Param('id') id: string, @Body('role') role: string) {
    return this.usersService.updateRole(+id, role);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Put(':id/approve')
  approveUser(@Param('id') id: string) {
    return this.usersService.approveUser(+id);
  }
}
