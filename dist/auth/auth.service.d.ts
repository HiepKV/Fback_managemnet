import { JwtService } from '@nestjs/jwt';
import { Employee } from 'src/users/entites/employees.entity';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    createAccessToken(user: Employee): Promise<string>;
    generatePassword(password: string): string;
    checkPassword(password: string, hashedPassword: string): boolean;
    verifyToken(token: string): Promise<any>;
}
