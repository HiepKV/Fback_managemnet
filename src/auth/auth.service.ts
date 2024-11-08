import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Employee } from 'src/users/entites/employees.entity';
import { createHash } from 'crypto';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}

    async createAccessToken(user: Employee) {
        const payload = { userName: user.username, sub: user.id };
        return await this.jwtService.signAsync(payload);
    }
    public generatePassword(password: string): string {
        const hash = createHash('sha256');
        hash.update(password);
        return hash.digest('hex');
    }
    public checkPassword(password: string, hashedPassword: string): boolean {
        const hash = createHash('sha256');
        hash.update(password);
        const hashedInput = hash.digest('hex');
        return hashedInput === hashedPassword;
    }
    async verifyToken(token: string) {
        let decoded: any;
        try {
            decoded = this.jwtService.verify(token);
            return decoded
        } catch (e) {
            return null;
        }
    }
}