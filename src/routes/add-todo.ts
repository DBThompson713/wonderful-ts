import { Request, Response } from 'express';
import { client } from '../helpers/redis';

export const addTodo = async (req: Request, res: Response) => {
  const { date, todo,completed } = req.body;
  const dateCheck = date?date:""
  const completedCheck = completed?completed:false

  // Need a better way to generate keys
  const id = Math.floor(Math.random() * 713)

  if (!todo) {
    return res.status(400).json({ message: 'Todo is required' });
  }

  try {
    await client.set(`${id}`, JSON.stringify({ 'date':dateCheck, 'todo': todo,id:id,completed:completedCheck }));
    return res.status(200).json({ message: 'successfully added todo!', data: { id: id, date: dateCheck, todo: todo,completedCheck } });
  } catch (error) {
    console.error("Error updating todo in Redis:", error);
    return res.status(500).json({ message: 'Error adding todo', error: "error adding todo" });
  }
};