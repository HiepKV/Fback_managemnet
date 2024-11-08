import { Exclude, Expose , plainToInstance} from "class-transformer";
import { Employee } from "src/users/entites/employees.entity";

@Exclude()
export class EmployeeDto {
    employee: Employee
    @Expose()
    userName: string

    @Expose()
    name: string

    @Expose()
    email: string   

    @Expose()
    phone_number: string

    @Expose()
    password: string

    @Expose()
    is_active: boolean  

}

export function toEmployeeDto(employee: Employee) {
    return plainToInstance(EmployeeDto, employee, { strategy: 'excludeAll' })
}