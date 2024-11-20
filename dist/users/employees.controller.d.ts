import { Employee } from "./entites/employees.entity";
import { EmployeeService } from "./employees.service";
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    createEmployee(employee: Employee): Promise<Employee>;
    getAllEmployees(): Promise<Employee[]>;
}
