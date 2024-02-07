import { GoalModel } from './models/goal.model';
import { UserModel } from 'src/user/models/user.model';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Goal implements GoalModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
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

  @ManyToOne(() => UserModel, (user) => user.goals)
  user: UserModel;

  constructor(data: {
    userId: string;
    name: string;
    description: string;
    createdAt: Date;
    finishedAt?: Date;
    priority?: string;
    tag?: string;
    status?: string;
    frequency?: string;
    reflection?: string[];
  }) {
    this.userId = data.userId;
    this.name = data.name;
    this.description = data.description;
    this.createdAt = data.createdAt;
    this.finishedAt = data.finishedAt || null;
    this.priority = data.priority || null;
    this.tag = data.tag || null;
    this.status = data.status || null;
    this.frequency = data.frequency || null;
    this.reflection = data.reflection || null;
  }
}
