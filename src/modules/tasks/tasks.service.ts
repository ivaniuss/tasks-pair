import { Injectable } from '@nestjs/common';
import { Task } from 'src/interfaces/tasks.interface';
@Injectable()
export class TasksService {
  getTasks(): Task[] {
    return [
      {
        id: '1',
        userId: '1',
        statusId: '1',
        title: 'Task 1',
        description: 'Task 1 description',
        createdAt: new Date(),
      },
    ];
  }

  createTask(): Task {
    return {
      id: '1',
      userId: '1',
      statusId: '1',
      title: 'Task 1',
      description: 'Task 1 description',
      createdAt: new Date(),
    };
  }
}
