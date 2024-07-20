import { Request, Response } from 'express';
import { getJokeTypesService, createJokeTypeService, getJokeTypeByIdService, updateJokeTypeService, deleteJokeTypeService } from '../services/jokeType.service';

const getJokeTypes = async (req: Request, res: Response) => {
  try {
    const jokeTypes = await getJokeTypesService();
    res.json(jokeTypes);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const createJokeType = async (req: Request, res: Response) => {
  try {
    const jokeType = await createJokeTypeService(req.body);
    res.status(201).json(jokeType);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const getJokeTypeById = async (req: Request, res: Response) => {
  try {
    const jokeType = await getJokeTypeByIdService(req.params.id);
    if (!jokeType) {
      res.status(404).json({ message: 'JokeType not found' });
    } else {
      res.json(jokeType);
    }
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const updateJokeType = async (req: Request, res: Response) => {
  try {
    const jokeType = await updateJokeTypeService(req.params.id, req.body);
    if (!jokeType) {
      res.status(404).json({ message: 'JokeType not found' });
    } else {
      res.json(jokeType);
    }
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const deleteJokeType = async (req: Request, res: Response) => {
  try {
    const jokeType = await deleteJokeTypeService(req.params.id);
    if (!jokeType) {
      res.status(404).json({ message: 'JokeType not found' });
    } else {
      res.json({ message: 'JokeType deleted successfully' });
    }
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export { getJokeTypes, createJokeType, getJokeTypeById, updateJokeType, deleteJokeType };
