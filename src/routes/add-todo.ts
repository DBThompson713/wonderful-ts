import { Request, Response } from 'express';
import { client } from '../helpers/redis';

export const addTodo = async (req: Request, res: Response) => {
  const { date, todo } = req.body;

  // Need a better way to generate keys
  const random = Math.floor(Math.random() * 713)

  try {
    await client.set(`${random}`, JSON.stringify({ 'date': date, 'todo': todo }));
    return res.status(200).json({ message: 'successfully added todo!', data: { id: random, date: date, todo: todo } });
  } catch (error) {
    console.error("Error updating todo in Redis:", error);
    return res.status(500).json({ message: 'Error adding todo', error: "error adding todo" });
  }
};