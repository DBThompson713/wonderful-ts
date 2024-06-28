require('dotenv').config();
import { Request, Response } from 'express';

export const getTodos = async (req:Request, res:Response) => {
console.log('get Todos hit',req.body)

// fetch all todos from upstash

  return res
    .status(200)
    .json({message: 'get todos', data: {name: 'test'}});    
};

module.exports = getTodos;
