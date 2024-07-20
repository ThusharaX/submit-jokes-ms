import { Router } from 'express';
import { getJokeTypes, createJokeType, getJokeTypeById, updateJokeType, deleteJokeType } from '../controllers/jokeType.controller';

const router = Router();

router.get('/', getJokeTypes);
router.post('/', createJokeType);
router.get('/:id', getJokeTypeById);
router.put('/:id', updateJokeType);
router.delete('/:id', deleteJokeType);

export default router;
