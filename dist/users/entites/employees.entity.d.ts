import { Department } from './department.entity';
export declare class Employee {
    id: number;
    username: string;
    email: string;
    phone_number: string;
    password: string;
    is_active: boolean;
    department: Department;
    created_at: Date;
    updated_at: Date;
}
