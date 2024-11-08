import { Employee } from "src/users/entites/employees.entity";
export declare class EmployeeDto {
    employee: Employee;
    userName: string;
    name: string;
    email: string;
    phone_number: string;
    password: string;
    is_active: boolean;
}
export declare function toEmployeeDto(employee: Employee): EmployeeDto;
