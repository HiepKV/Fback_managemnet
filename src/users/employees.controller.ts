import { Controller, Get , } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employee } from "./entites/employees.entity";
import { EmployeeService } from "./employees.service";
@Controller('employees')
export class EmployeeController {

    constructor(
        private readonly employeeService: EmployeeService
        
    ) { }
    @Get('employees/all')
    async getAllEmployees() {
        const employees = await this.employeeService.getAllEmployees()
        return employees
    }
}