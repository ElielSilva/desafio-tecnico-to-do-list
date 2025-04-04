
const TaskService = require('../services/task.service.js');

const TaskController = {
  findAllTask: async (req, res, next) => {
    try {
      const tasks = await TaskService.findAllTask(req);
      res.status(200).json(tasks);
    } catch (error) {
      next(error)
    }
  },

  createTask: async (req, res, next) => {
    try {
      const tasks = await TaskService.createTask(req);
      res.status(200).json({ message: "created with sucess" });
    } catch (error) {
      next(error)
    }
  },

  deleteById: async (req, res, next) => {
    try {
      const tasks = await TaskService.deleteById(req.userId, req.params.taskId);
      res.status(200).json({ message: "deleted sucess" });
    } catch (error) {
      next(error)
    }
  },

  updateStatusById: async (req, res, next) => {
    try {
      await TaskService.updateStatusById(req.userId, req.params.taskId);
      res.status(200).json({ message: "Task status updated successfully" });
    } catch (error) {
      next(error)
    }
  },

  updateById: async (req, res, next) => {
    try {
      const { userId, params: { taskId }, body } = req;
      const tasks = await TaskService.updateById(userId, taskId, body);
      res.status(200).json({ message: "Task updated successfully" });
    } catch (error) {
      next(error)
    }
  },
}

module.exports = TaskController;