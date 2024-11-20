import { Repository } from 'typeorm';
import { Employee } from '../users/entites/employees.entity';
import { AuthService } from 'src/auth/auth.service';
import { SignupDto } from 'src/auth/dto/signup.dto';
export declare class EmployeeService {
    private employeeRepository;
    private readonly authService;
    constructor(employeeRepository: Repository<Employee>, authService: AuthService);
    createEmployee(signupBody: Partial<SignupDto>): Promise<Employee>;
    getEmployeeByUsername(username: string): Promise<Employee | null>;
    getEmployeeById(id: number): Promise<Employee | null>;
    getAllEmployees(): Promise<Employee[]>;
}
