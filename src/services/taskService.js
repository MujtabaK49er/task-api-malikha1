import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks(completed) {
  // I am making sure no query return all tasks
  if (completed === undefined) {
    return taskRepository.findAll();
  }


  if (completed !== 'true' && completed !== 'false') {
    throw new Error('Invalid completed query parameter');
  }


  const isCompleted = completed === 'true';


  return taskRepository.findByCompleted(isCompleted);
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}