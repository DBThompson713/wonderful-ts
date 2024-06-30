import { Request, Response } from 'express';
import {addTodo} from './../routes/add-todo'
import {getTodos} from './../routes/get-todos'
import {getTodo} from './../routes/get-todo'
import {updateTodo} from './../routes/update-todo'

export const todoController = async (req: Request, res: Response) => {
  try {
    const url = req?.url as keyof typeof functionLookup;
    const functionLookup = {
      '/get-todos': getTodos,
      '/get-todo': getTodo,
      '/add-todo': addTodo,
      '/update-todo': updateTodo,
    };

    const functionType = functionLookup[url];
    if (!functionType) {
      return res.status(500).send({ message: 'Something went wrong' });
    }
    await functionType( req, res );
  } catch (err) {
    console.log('Error routing search request', err);
  }
};
