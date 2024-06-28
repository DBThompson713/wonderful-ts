require('dotenv').config();
import { Request, Response } from 'express';

export const updateTodo = async (req:Request, res:Response) => {
console.log('update Todo hit',req.body)
const random = Math.floor(Math.random()*713)

// update todo in upstash

  return res
    .status(200)
    .json({message: 'Update todo hit', data: {id:random,date: 'test'}});    
};

module.exports = updateTodo;

