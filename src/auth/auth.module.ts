import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { EmployeeService } from "src/users/employees.service";
import { EmployeeController } from "src/users/employees.controller";
import { EmployeeModule } from "src/users/employees.module";



@Module({
    imports: [ JwtModule ,EmployeeModule ],
    controllers: [AuthController],
    providers: [AuthService, EmployeeService],
    exports: [AuthService],
})

export class AuthModule { }