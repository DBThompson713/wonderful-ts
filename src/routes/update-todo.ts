import { Request, Response } from 'express';
import { client } from '../helpers/redis';

export const updateTodo = async (req: Request, res: Response) => {
    const { key, value } = req.body; 

    if (!key || !value) {
        return res.status(400).json({ message: 'Both key and value are required for updating todo' });
    }

    const stringifiedValue = JSON.stringify(value);

    try {
        await client.set(key, stringifiedValue);

        return res.status(200).json({ message: `Todo with key ${key} updated successfully` });
    } catch (error) {
        console.error("Error updating todo in Redis:", error);
        return res.status(500).json({ message: 'Error updating todo', error: "error updating todo" });
    }
};