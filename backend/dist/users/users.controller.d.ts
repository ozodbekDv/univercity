import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getTeachers(): Promise<any[]>;
    findAll(): Promise<any[]>;
    updateRole(id: string, role: string): Promise<any>;
    approveUser(id: string): Promise<any>;
}
