export class GoalModel {
  id: string;
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

  constructor(
    id: string,
    userId: string,
    name: string,
    description: string,
    created: Date,
    finishedAt?: Date,
    priority?: string,
    tag?: string,
    status?: string,
    frequency?: string,
    reflection?: string[],
  ) {
    this.id = id;
    this.userId = userId;
    this.name = name;
    this.description = description;
    this.createdAt = created;
    this.finishedAt = finishedAt;
    this.priority = priority;
    this.tag = tag;
    this.status = status;
    this.frequency = frequency;
    this.reflection = reflection;
  }
}
