require('dotenv').config();
import { Request, Response } from 'express';

export const getTodo = async (req:Request, res:Response) => {
console.log('get Todo hit',req.body)


// fetch individual todo from upstash
  return res
    .status(200)
    .json({message: 'get Todo', data: {name: 'test'}});    
};

module.exports = getTodo;
