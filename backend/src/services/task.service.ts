import { Task } from '../database/models/Task.js';
import { validateBodyRegister, validateBodylogin } from '../helpers/validations.js';
import { TokenService } from './token.service.js';
import HttpException from '../shared/HttpException.js';

interface IResponseUserService {
  name: string;
  email: string;
}

interface RequestWithUser extends Request {
  userId?: string;
}

export default class TaskService {
  private TaskModel: Task;
  private tokenService: TokenService;
  constructor() {
    this.TaskModel = new Task();
    this.tokenService = new TokenService();
  }

  public async createTask(RequestBody: any): Promise<void> {
    // console.log("user service");
    const {userId, body: { title, description} } = RequestBody
    await Task.create({ title, description, userId });
  }
  
  public async findAllTask(RequestBody: any): Promise<any> {
    const tasks = await Task.findAll({where: {userId: RequestBody.userId}});
    // console.log(tasks);

    return tasks;
  }

  public async deleteById(userId: any, taskId: string): Promise<any> {
    const tasks = await Task.destroy({where: {userId, id: taskId}});
    console.log(tasks);
    return tasks;
  }
}