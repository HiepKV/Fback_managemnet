import { Body, Controller, Get, Post , } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employee } from "./entites/employees.entity";
import { EmployeeService } from "./employees.service";
@Controller('employees')
export class EmployeeController {

    constructor(
        private readonly employeeService: EmployeeService
        
    ) { }
    @Post('add')
    async createEmployee(@Body() employee: Employee) {
        return this.employeeService.createEmployee(employee);
    }
    @Get('all')
    async getAllEmployees() {
        const employees = await this.employeeService.getAllEmployees()
        return employees
    }
}