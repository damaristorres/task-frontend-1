import { Task } from '../task/task.model';

export class SubTask {
    filter(arg0: (val: any) => boolean): SubTask[] {
      throw new Error('Method not implemented.');
    }

    id: number;

    name: string;

    date: Date;

    descripcion: string;

    task: Task;

}