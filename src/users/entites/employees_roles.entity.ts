import { Column, Entity, ManyToOne, PrimaryColumn  } from 'typeorm';
import { Employee } from './employees.entity';
import { Role } from './roles.entity';

@Entity()
export class EmployeeRole {
  @PrimaryColumn()
  employee_id: number;

  @ManyToOne(() => Employee)
  employee: Employee;

  @PrimaryColumn()
  role_id: number;

  @ManyToOne(() => Role)
  role: Role;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
