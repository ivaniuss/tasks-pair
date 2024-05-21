import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks() {
    return 'tasks';
  }

  @Get('task')
  getTask() {
    return 'task';
  }

  @Post()
  createTask() {
    return 'create task';
  }

  @Put()
  updateTask() {
    return 'update task';
  }

  @Delete()
  deleteTask() {
    return 'delete task';
  }

  @Delete('tasks')
  deleteTasks() {
    return 'delete tasks';
  }
}
