"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let PostsService = class PostsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.post.findMany({
            include: { author: { select: { name: true, role: true } } },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        return this.prisma.post.findUnique({
            where: { id },
            include: { author: { select: { name: true, role: true } } },
        });
    }
    async create(data, user) {
        if (user.role === 'USER' && !user.isApproved) {
            throw new common_1.ForbiddenException('User is not approved to write posts');
        }
        return this.prisma.post.create({
            data: {
                ...data,
                authorId: user.userId,
            },
        });
    }
    async remove(id, user) {
        const post = await this.prisma.post.findUnique({ where: { id } });
        if (!post)
            return null;
        if (user.role !== 'ADMIN' && post.authorId !== user.userId) {
            throw new common_1.ForbiddenException('Not authorized to delete this post');
        }
        return this.prisma.post.delete({ where: { id } });
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostsService);
//# sourceMappingURL=posts.service.js.map