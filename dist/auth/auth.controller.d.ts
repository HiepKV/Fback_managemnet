import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { EmployeeService } from 'src/users/employees.service';
import { SignupDto } from './dto/signup.dto';
export declare class AuthController {
    private readonly authService;
    private readonly employeeService;
    constructor(authService: AuthService, employeeService: EmployeeService);
    login(body: LoginDto): Promise<{
        accessToken: string;
    }>;
    signup(body: SignupDto): Promise<{
        accessToken: string;
    }>;
}
