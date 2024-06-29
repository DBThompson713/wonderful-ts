require('dotenv').config();
import { Request, Response } from 'express';
import { client } from '../helpers/redis';

export const getTodos = async (req: Request, res: Response) => {
  try {
    const result: { [key: string]: string | null } = {};
    let cursor = '0';

    do {
      const [newCursor, keys] = await client.scan(cursor);
      cursor = newCursor;

      if (keys.length > 0) {
        const values = await client.mget(keys);
        keys.forEach((key, index) => {
          const parsedData = JSON.parse(values[index] as string);
          return (result[key] = parsedData)

        });
      }
    } while (cursor !== '0');

    return res.status(200).json({ message: 'get todos', data: result });
  } catch (error) {
    console.error("Error fetching todos from Redis:", error);
    return res.status(500).json({ message: 'Error fetching todos', error: "unable to fetch todos" });
  }
};