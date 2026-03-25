import { PrismaService } from '../prisma.service';
export declare class PostsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<any>;
    create(data: any, user: any): Promise<any>;
    remove(id: number, user: any): Promise<any>;
}
