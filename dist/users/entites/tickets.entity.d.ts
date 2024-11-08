import { Employee } from './employees.entity';
export declare class Ticket {
    ticket_id: number;
    employee: Employee;
    title: string;
    description: string;
    status: string;
    created_at: Date;
    updated_at: Date;
}
