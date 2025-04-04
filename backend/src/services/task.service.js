const db = require('../database/models/index.js');
const { validateBodyRegister, validateBodylogin, validateBodyUpdateTask } = require('../utils/validations.js');
const TokenService = require('./token.service.js');
const HttpException = require('../utils/HttpException.js');

const TaskService = {

  createTask: async (RequestBody) => {
    const {userId, body: { title, description} } = RequestBody
    await db.Task.create({ title, description, userId });
  },
  
  findAllTask: async (RequestBody) => {
    const tasks = await db.Task.findAll({where: {userId: RequestBody.userId}});

    return tasks;
  },

  updateStatusById: async (userId, taskId) => {
    const task = await db.Task.findOne({where: {userId, id: taskId}});
    
    if (!task) {
      throw new HttpException(404, 'Task not found');
    }
    const newStatus = !task.completed;

    await task.update({ completed: newStatus });
    await task.save();
  },

  updateById: async (userId, taskId, body) => {
    const resultValidation = validateBodyUpdateTask(body);
    if(resultValidation.length) {
      throw new HttpException(400, resultValidation)
    }
    const tasks = await db.Task.findOne({where: {userId, id: taskId}});
    console.log("updateStatusById service");
    if (!tasks) {
      throw new HttpException(404, 'Task not found');
    }
    await tasks.update(body);
    
    await tasks.save();
  },

  deleteById: async (userId, taskId) => {
    const tasks = await db.Task.destroy({where: {userId, id: taskId}});
    return tasks;
  }
}

module.exports = TaskService;
