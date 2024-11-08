import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Employee } from './employees.entity';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  ticket_id: number;

  @ManyToOne(() => Employee, employee => employee.id)
  employee: Employee;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
