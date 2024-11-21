import {
    Controller,
    Get,
    Post,
    Body,
    HttpCode,
    HttpException,
    HttpStatus,
    Inject,
    forwardRef,
    UnauthorizedException,
    ConflictException
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { EmployeeService } from 'src/users/employees.service';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        @Inject(forwardRef(() => EmployeeService))
        private readonly employeeService: EmployeeService
    ) {}
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() body: LoginDto) {
        const employee = await this.employeeService.getEmployeeByUsername(body.userName);
        if (!employee || !this.authService.checkPassword(body.password, employee.password)) {
            throw new UnauthorizedException("Wrong username or password");
        }
        const token = await this.authService.createAccessToken(employee);
        return {
            accessToken: token
        };
    }

    @HttpCode(HttpStatus.OK)
    @Post('/signup')
    async signup(@Body() body: SignupDto) {
        // const employee = await this.employeeService.getEmployeeByUsername(body.userName);
        // if (employee) {
        //     throw new ConflictException('UserName already exists');
        // }
        const newEmployee = await this.employeeService.createEmployee(body);
        const token = await this.authService.createAccessToken(newEmployee);
        return {
            accessToken: token
        };
    }
}
