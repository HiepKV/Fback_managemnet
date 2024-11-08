import { Repository } from 'typeorm';
import { Employee } from '../users/entites/employees.entity';
import { AuthService } from 'src/auth/auth.service';
export declare class EmployeeService {
    private employeeRepository;
    private authService;
    constructor(employeeRepository: Repository<Employee>, authService: AuthService);
    getEmployeeByUsername(username: string): Promise<Employee | null>;
    getEmployeeById(id: number): Promise<Employee | null>;
    getAllEmployees(): Promise<Employee[]>;
}
