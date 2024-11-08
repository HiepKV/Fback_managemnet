import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Employee } from './employees.entity';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  depart_id: number;

  @Column()
  name: string;

  @Column()
  number_room: number;

  @OneToMany(() => Employee, employee => employee.department)
  employees: Employee[];
}
