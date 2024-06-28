require('dotenv').config();
import { Request, Response } from 'express';

export const deleteTodo = async (req:Request, res:Response) => {
console.log('delete Todos hit',req.body)

// delete from upstash

  return res
    .status(200)
    .json({message: 'Delete Todo', data: {name: 'test'}});    
};

module.exports = deleteTodo;
