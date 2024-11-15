import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { EmployeeService } from "src/users/employees.service";
import { EmployeeController } from "src/users/employees.controller";
import { EmployeeModule } from "src/users/employees.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Employee } from "src/users/entites/employees.entity";



@Module({
    imports: [ 
        TypeOrmModule.forFeature([Employee]), 
        JwtModule.register({})
    ],
    controllers: [AuthController],
    providers: [AuthService, EmployeeService],
    exports: [AuthService],
})

export class AuthModule { }