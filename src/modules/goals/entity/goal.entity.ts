import { IGoal } from 'src/modules/goals/models/interface/igoal.interface';
import { User } from 'src/modules/user/entity/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  BaseEntity,
} from 'typeorm';

@Entity('goals')
export class Goal extends BaseEntity implements IGoal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  finishedAt: Date | null;

  @Column({ nullable: true })
  priority: string | null;

  @Column({ nullable: true })
  tag: string | null;

  @Column({ nullable: true })
  status: string | null;

  @Column({ nullable: true })
  frequency: string | null;

  @Column('text', { array: true, nullable: true })
  reflection: string[] | null;

  @ManyToOne(() => User, (user) => user.goals)
  user: User;
}
