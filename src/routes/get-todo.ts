require('dotenv').config();
import { Request, Response } from 'express';
import { client } from '../helpers/redis';

export const getTodo = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    if (!id) {
      return res.status(400).json({ message: 'id is required' })
    }
    const data = await client.get(id.toString());
    const parsedData = JSON.parse(data as string);
    return res
      .status(200)
      .json({ message: 'Successfully fetched Todo', parsedData });
  } catch (error) {
    console.error("Error fetching todo from Redis:", error);
    return res.status(500).json({ message: 'Error fetching todo', error: "unable to fetch todo" });
  }
}









