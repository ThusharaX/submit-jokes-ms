import Joke from '../models/joke.model';

const getJokes = async () => {
  return await Joke.find();
};

const createJoke = async (data: { setup: string; punchline: string; type: string; author: string }) => {
  const joke = new Joke(data);
  return await joke.save();
};

const getJokeById = async (id: string) => {
  return await Joke.findById(id);
};

const updateJoke = async (id: string, data: Partial<{ setup: string; punchline: string; type: string; author: string }>) => {
  return await Joke.findByIdAndUpdate(id, data, { new: true });
};

const deleteJoke = async (id: string) => {
  return await Joke.findByIdAndDelete(id);
};

export { getJokes, createJoke, getJokeById, updateJoke, deleteJoke };