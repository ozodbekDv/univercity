import { PostsService } from './posts.service';
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    create(body: any, req: any, file: Express.Multer.File): Promise<any>;
    remove(id: string, req: any): Promise<any>;
}
