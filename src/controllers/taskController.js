import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  try {
    const { completed } = req.query;

    if (
      completed !== undefined &&
      completed !== 'true' &&
      completed !== 'false'
    ) {
      return res.status(400).json({ error: 'Invalid completed query parameter' });
    }

    const tasks = await taskService.getAllTasks(completed);
    res.status(200).json(tasks);
  } catch (error) {
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