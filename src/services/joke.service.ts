import { getJokes, createJoke, getJokeById, updateJoke, deleteJoke } from '../repositories/joke.repository';

const getJokesService = async () => {
  return await getJokes();
};

const createJokeService = async (data: { setup: string; punchline: string; type: string; author: string }) => {
  return await createJoke(data);
};

const getJokeByIdService = async (id: string) => {
  return await getJokeById(id);
};

const updateJokeService = async (id: string, data: Partial<{ setup: string; punchline: string; type: string; author: string }>) => {
  return await updateJoke(id, data);
};

const deleteJokeService = async (id: string) => {
  return await deleteJoke(id);
};

export { getJokesService, createJokeService, getJokeByIdService, updateJokeService, deleteJokeService };
