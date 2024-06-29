require('dotenv').config();
import { Request, Response } from 'express';
import { client } from '../helpers/redis';

export const deleteTodo = async (req: Request, res: Response) => {
    const { key } = req.params;

    if (!key) {
        return res.status(400).json({ message: 'Key is required' });
    }
    try {
        const result = await client.del(key);

        if (result === 1) {
            return res.status(200).json({ message: `Todo with key ${key} deleted successfully` });
        } else {
            return res.status(404).json({ message: `Todo with key ${key} not found` });
        }
    } catch (error) {
        console.error("Error deleting todo from Redis:", error);
        return res.status(500).json({ message: 'Error deleting todo', error: "unable to delete todo" });
    }
};
