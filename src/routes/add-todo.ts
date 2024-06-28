import { Request, Response } from 'express';

export const addTodo = async (req: Request, res: Response) => {
  console.log('add Todo hit', req.body);
  const {date,todo} = req.body;
  const random = Math.floor(Math.random()*713)

  // store to upstash 


  return res.status(200).json({ message: 'successfully added todo!', data: { id:random,date: date, todo:todo  } });
};