export interface IGoal {
  id: string;
  userId: string;
  name: string;
  description: string;
  createdAt: Date;
  finishedAt: Date | null;
  priority: string | null;
  tag: string | null;
  status: string | null;
  frequency: string | null;
  reflection: string[] | null;
  user: any;
}
