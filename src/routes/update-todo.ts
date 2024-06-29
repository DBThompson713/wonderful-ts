import { Request, Response } from 'express';
import { client } from '../helpers/redis';

export const updateTodo = async (req: Request, res: Response) => {
    const { id} = req.body; 
    if (!id) {
        return res.status(400).json({ message: 'Both key and value are required for updating todo' });
    }

    const stringifiedValue = JSON.stringify(req.body);

    try {
        await client.set(id, stringifiedValue);

        return res.status(200).json({ message: `Todo with key ${id} updated successfully` });
    } catch (error) {
        console.error("Error updating todo in Redis:", error);
        return res.status(500).json({ message: 'Error updating todo', error: "error updating todo" });
    }
};