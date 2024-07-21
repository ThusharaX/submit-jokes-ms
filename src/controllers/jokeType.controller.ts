import { Request, Response } from 'express';
import { getJokeTypesService } from '../services/jokeType.service';

const getJokeTypes = async (req: Request, res: Response) => {
  try {
    const jokeTypes = await getJokeTypesService();
    res.json(jokeTypes);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export { getJokeTypes };
