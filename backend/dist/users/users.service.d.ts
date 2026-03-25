import { PrismaService } from '../prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findOneByEmail(email: string): Promise<any>;
    findOneById(id: number): Promise<any>;
    create(data: any): Promise<any>;
    findAll(): Promise<any[]>;
    findTeachers(): Promise<any[]>;
    updateRole(id: number, role: string): Promise<any>;
    approveUser(id: number): Promise<any>;
}
