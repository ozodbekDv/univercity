"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const common_1 = require("@nestjs/common");
let PrismaService = class PrismaService {
    users = [];
    posts = [];
    userIdCounter = 1;
    postIdCounter = 1;
    async onModuleInit() {
        console.log('Mock Prisma Service Initialized');
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
        findUnique: async ({ where }) => {
            if (where.email)
                return this.users.find(u => u.email === where.email);
            if (where.id)
                return this.users.find(u => u.id === where.id);
            return null;
        },
        findMany: async (args) => {
            if (args?.where?.role)
                return this.users.filter(u => u.role === args.where.role);
            return this.users;
        },
        create: async ({ data }) => {
            const newUser = { ...data, id: this.userIdCounter++, createdAt: new Date() };
            this.users.push(newUser);
            return newUser;
        },
        update: async ({ where, data }) => {
            const index = this.users.findIndex(u => u.id === where.id);
            if (index === -1)
                return null;
            this.users[index] = { ...this.users[index], ...data };
            return this.users[index];
        }
    };
    post = {
        findMany: async (args) => {
            let result = this.posts.map(p => ({
                ...p,
                author: this.users.find(u => u.id === p.authorId)
            }));
            if (args?.orderBy?.createdAt === 'desc') {
                result.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
            }
            return result;
        },
        findUnique: async ({ where }) => {
            const p = this.posts.find(p => p.id === where.id);
            if (!p)
                return null;
            return { ...p, author: this.users.find(u => u.id === p.authorId) };
        },
        create: async ({ data }) => {
            const newPost = { ...data, id: this.postIdCounter++, createdAt: new Date() };
            this.posts.push(newPost);
            return newPost;
        },
        delete: async ({ where }) => {
            const index = this.posts.findIndex(p => p.id === where.id);
            if (index === -1)
                return null;
            return this.posts.splice(index, 1)[0];
        }
    };
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)()
], PrismaService);
//# sourceMappingURL=prisma.service.js.map