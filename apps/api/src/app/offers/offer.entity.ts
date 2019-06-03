import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity('offer')
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250, type: 'varchar' })
  title: string;

  @Column({ name: 'user_id' })
  userId: number;

  @OneToOne(() => User, user => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn({ type: 'timestamp with time zone', name: 'created_at' })
  createdAt: string;
}
