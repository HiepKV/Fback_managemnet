import { Module, forwardRef } from '@nestjs/common';
import { EmployeeService } from './employees.service';
import { Employee } from './entites/employees.entity';
import { EmployeeController } from './employees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';


@Module({
    imports: [ TypeOrmModule.forFeature([Employee]), forwardRef(() => AuthModule)],
    controllers: [EmployeeController],
    providers: [EmployeeService],
})

export class EmployeeModule { }