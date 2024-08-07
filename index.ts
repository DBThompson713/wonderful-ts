import express, { Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import { todoController } from './src/controllers/todoController';
import {deleteTodo} from './src/routes/delete-todo'
import { getTodo } from './src/routes/get-todo';
import cors from 'cors';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

//----------- health check ------------

app.get('/', (req: Request, res: Response) => {
    console.log('Health check');
    return res.status(200).send('Online!');
});

//----------- todo endpoints------------

app.post('/add-todo', async(req: Request, res: Response) => {
    await todoController(req, res);  
});

app.get('/get-todos', async(req: Request, res: Response) => {
    await todoController(req, res);
});

app.get('/get-todo/:id', getTodo);


app.delete('/delete-todo/:key', deleteTodo);

app.patch('/update-todo', async(req: Request, res: Response) => {
    await todoController(req, res);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});