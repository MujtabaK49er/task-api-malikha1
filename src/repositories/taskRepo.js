import prisma from '../config/db.js';

export async function findAll() {
  return prisma.task.findMany();
}

// Making a new function for filtering........
export async function findByCompleted(completed) {
  return prisma.task.findMany({
    where: {
      completed: completed
    }
  });
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}