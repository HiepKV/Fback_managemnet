import { Employee } from "./entites/employees.entity";
import { EmployeeService } from "./employees.service";
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    getEmployeeById(id: number): Promise<Employee>;
    getEmployeeByUsername(username: string): Promise<Employee>;
    getAllEmployees(): Promise<Employee[]>;
    deleteEmployeeById(id: number): Promise<void>;
}
