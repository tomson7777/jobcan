import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../shared/role.enum';

@Entity('app_user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column()
  email: string;

  @Column()
  company: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: Role,
  })
  role: Role;
}
