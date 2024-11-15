import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { Employee } from './employees.entity';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  depart_id: number;

  @Column()
  name: string;

  @Column()
  number_room: number;

  @OneToMany(() => Employee, employee => employee.id)
  @JoinColumn( { name: 'id_department' }) 
  employees: Employee;
}
