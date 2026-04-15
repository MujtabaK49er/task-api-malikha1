import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  try {
    const { completed } = req.query;
    const tasks = await taskService.getAllTasks(completed);
    res.status(200).json(tasks);
  } catch (error) {
    error.status = error.status || 400;
    next(error);
  }
}

export async function createTask(req, res, next) {
  try {
    const { title, completed } = req.body;
    const task = await taskService.createTask({ title, completed });
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
}