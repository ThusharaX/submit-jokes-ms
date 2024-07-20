import { Request, Response } from 'express';
import { getJokesService, createJokeService, getJokeByIdService, updateJokeService, deleteJokeService } from '../services/joke.service';

const getJokes = async (req: Request, res: Response) => {
  try {
    const jokes = await getJokesService();
    res.json(jokes);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const createJoke = async (req: Request, res: Response) => {
  try {
    const joke = await createJokeService(req.body);
    res.status(201).json(joke);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const getJokeById = async (req: Request, res: Response) => {
  try {
    const joke = await getJokeByIdService(req.params.id);
    if (!joke) {
      res.status(404).json({ message: 'Joke not found' });
    } else {
      res.json(joke);
    }
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const updateJoke = async (req: Request, res: Response) => {
  try {
    const joke = await updateJokeService(req.params.id, req.body);
    if (!joke) {
      res.status(404).json({ message: 'Joke not found' });
    } else {
      res.json(joke);
    }
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const deleteJoke = async (req: Request, res: Response) => {
  try {
    const joke = await deleteJokeService(req.params.id);
    if (!joke) {
      res.status(404).json({ message: 'Joke not found' });
    } else {
      res.json({ message: 'Joke deleted successfully' });
    }
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export { getJokes, createJoke, getJokeById, updateJoke, deleteJoke };
