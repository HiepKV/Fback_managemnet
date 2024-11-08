import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from '../users/entites/employees.entity';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class EmployeeService {
    constructor(
       @InjectRepository(Employee)
       private employeeRepository: Repository<Employee>,
       private authService: AuthService 
    ) { }

    async getEmployeeByUsername(username: string): Promise<Employee | null> {
        const employee = await this.employeeRepository.findOneBy({ username });
        return employee;    
    }
    async getEmployeeById(id: number): Promise<Employee | null> {
        const employee = await this.employeeRepository.findOneBy({ id });
        return employee;    
    }
    async getAllEmployees(): Promise<Employee[]> {
        const employees = await this.employeeRepository.find();
        return employees;
    }
}


