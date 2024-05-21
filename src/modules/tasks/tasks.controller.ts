import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks(): object {
    return {};
  }

  @Get('task')
  getTask(): object {
    return {};
  }

  @Post()
  createTask(): object {
    return {};
  }

  @Put()
  updateTask(): object {
    return {};
  }

  @Delete()
  deleteTask(): string {
    return 'Task deleted!';
  }

  @Delete('tasks')
  deleteTasks(): string {
    return 'Tasks deleted!';
  }
}
