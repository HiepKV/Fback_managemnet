import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from '../users/entites/employees.entity';
import { AuthService } from 'src/auth/auth.service';
import { SignupDto } from 'src/auth/dto/signup.dto';

@Injectable()
export class EmployeeService {
    constructor(
       @InjectRepository(Employee)
       private employeeRepository: Repository<Employee>,
       private readonly authService: AuthService 
    ) { }
    async createEmployee(signupBody: Partial<SignupDto>): Promise<Employee> {
        const hashedPassword = this.authService.generatePassword(signupBody.password!);
        signupBody.password = hashedPassword;
        delete signupBody.passwordConfirm;
        const employee = await this.employeeRepository.save(signupBody);
        return employee;
    }
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


