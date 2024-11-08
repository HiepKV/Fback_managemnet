import { Employee } from './employees.entity';
import { Role } from './roles.entity';
export declare class EmployeeRole {
    employee_id: number;
    employee: Employee;
    role_id: number;
    role: Role;
    created_at: Date;
    updated_at: Date;
}
