import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks(completed) {
  if (completed === undefined) {
    return await taskRepository.findAll();
  }

  if (completed !== 'true' && completed !== 'false') {
    const error = new Error('Invalid completed query parameter');
    error.status = 400;
    throw error;
  }

  const isCompleted = completed === 'true';
  return await taskRepository.findByCompleted(isCompleted);
}

export async function createTask(newTask) {
  return await taskRepository.create(newTask);
}