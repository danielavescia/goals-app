export class goalsDto {
  name: string;
  description: string;
  createdAt: Date;
  finishedAt?: Date;
  priority?: string;
  tag?: string;
  status?: string;
  frequency?: string;
  reflection?: string[];
}
