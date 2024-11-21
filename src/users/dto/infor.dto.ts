import { Exclude, Expose } from "class-transformer";
import { Employee } from "src/users/entites/employees.entity";


@Exclude()
export class EmployeeInfoDto {
    @Expose()
    userName: string;
    @Expose()
    email: string;
    @Expose()
    phone_number: string;
}