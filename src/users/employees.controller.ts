import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post , } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employee } from "./entites/employees.entity";
import { EmployeeService } from "./employees.service";
@Controller('employees')
export class EmployeeController {

    constructor(
        private readonly employeeService: EmployeeService
        
    ) { }
    @Get('employee/id/:id')
    async getEmployeeById(@Param('id', ParseIntPipe) id: number) {
        const employee = await this.employeeService.getEmployeeById(id)
        return employee;    
    }
    @Get('employee/username/:username')
    async getEmployeeByUsername(@Param('username') username: string) {
        const employee = await this.employeeService.getEmployeeByUsername(username)
        return employee;
    }
    @Get('all')
    async getAllEmployees() {
        const employees = await this.employeeService.getAllEmployees()
        return employees
    }
    @Delete('delete/id')
    async deleteEmployeeById(@Body() id: number) {
        const employee = await this.employeeService.deleteEmployeeById(id)
        console.log("Completed");
        return employee;
    }
}