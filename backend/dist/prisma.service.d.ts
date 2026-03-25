import { OnModuleInit } from '@nestjs/common';
export declare class PrismaService implements OnModuleInit {
    private users;
    private posts;
    private userIdCounter;
    private postIdCounter;
    onModuleInit(): Promise<void>;
    user: {
        findUnique: ({ where }: any) => Promise<any>;
        findMany: (args?: any) => Promise<any[]>;
        create: ({ data }: any) => Promise<any>;
        update: ({ where, data }: any) => Promise<any>;
    };
    post: {
        findMany: (args?: any) => Promise<any[]>;
        findUnique: ({ where }: any) => Promise<any>;
        create: ({ data }: any) => Promise<any>;
        delete: ({ where }: any) => Promise<any>;
    };
}
