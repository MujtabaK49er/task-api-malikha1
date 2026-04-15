import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks(completed) {
  if (completed === undefined) {
    return await taskRepository.findAll();
  }

  const isCompleted = completed === 'true';
  return await taskRepository.findByCompleted(isCompleted);
}

export async function createTask(newTask) {
  return await taskRepository.create(newTask);
}