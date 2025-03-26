import {NextFunction ,Request, Response } from 'express';
import TaskService from '../services/task.service.js';

interface RequestWithUserId extends Request {
  userId?: string;
}

class TaskController {
  constructor(
    private taskService = new TaskService()
  ) { }

  public findAllTask = async (RequestBody: RequestWithUserId, res: Response, next:NextFunction) => {
    try {
      // console.log("RequestBody", RequestBody);
      const tasks = await this.taskService.findAllTask(RequestBody);
      res.status(200).json(tasks);
    } catch (error) {
      next(error)
    }
  };

  public createTask = async (RequestBody: RequestWithUserId, res: Response, next:NextFunction) => {
    try {
      // console.log("RequestBody", RequestBody.userId);
      const tasks = await this.taskService.createTask(RequestBody);
      res.status(200).json({ tasks });
    } catch (error) {
      next(error)
    }
  };

  public deleteById = async (RequestBody: RequestWithUserId, res: Response, next:NextFunction) => {
    try {
      // console.log("RequestBody", RequestBody.userId, RequestBody.params.taskId);
      const tasks = await this.taskService.deleteById(RequestBody.userId, RequestBody.params.taskId);
      res.status(200).json({ tasks });
    } catch (error) {
      next(error)
    }
  };

  public updateStatusById = async (RequestBody: RequestWithUserId, res: Response, next:NextFunction) => {
    try {
      // console.log("RequestBody", RequestBody.userId, RequestBody.params.taskId);
      
      await this.taskService.updateStatusById(RequestBody.userId, RequestBody.params.taskId);
      res.status(200).json({ message: "Task status updated successfully" });
    } catch (error) {
      next(error)
    }
  };

  public updateById = async (RequestBody: RequestWithUserId, res: Response, next:NextFunction) => {
    try {
      // console.log("RequestBody", RequestBody.userId, RequestBody.params.taskId);
      console.log('updateById controller')
      const { userId, params: { taskId }, body } = RequestBody;
      const tasks = await this.taskService.updateById(userId, taskId, body);
      res.status(200).json({ message: "Task updated successfully" });
    } catch (error) {
      next(error)
    }
  };
  
}

export default TaskController;