import prisma from '../config/db.js';

export async function findAll() {
  return await prisma.task.findMany();
}

export async function findByCompleted(completed) {
  return await prisma.task.findMany({
    where: {
      completed: completed,
    },
  });
}

export async function create(data) {
  return await prisma.task.create({
    data,
  });
}