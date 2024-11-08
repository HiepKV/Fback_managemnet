import { Exclude, Expose, plainToInstance } from "class-transformer";
import { Employee } from "src/users/entites/employees.entity";

@Exclude()
export class LoginDto {

    @Expose()
    userName: string;

    @Expose()
    password: string;
}