import { Body, Controller, Get, Param, Post , } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employee } from "./entites/employees.entity";
import { EmployeeService } from "./employees.service";
@Controller('employees')
export class EmployeeController {

    constructor(
        private readonly employeeService: EmployeeService
        
    ) { }
    @Get('employee/id')
    async getEmployeeById(@Body() id: number) {
        const employee = await this.employeeService.getEmployeeById(id)
        return employee;
    }
    @Get('employee/me')
    async getEmployeeByUsername(@Body() username: string) {
        const employee = await this.employeeService.getEmployeeByUsername(username)
        return employee;
    }
    @Get('all')
    async getAllEmployees() {
        const employees = await this.employeeService.getAllEmployees()
        return employees
    }
}