import JokeType from '../models/jokeType.model';

const getJokeTypes = async () => {
  return await JokeType.find();
};

const createJokeType = async (data: { name: string }) => {
  const jokeType = new JokeType(data);
  return await jokeType.save();
};

const getJokeTypeById = async (id: string) => {
  return await JokeType.findById(id)
};

const updateJokeType = async (id: string, data: Partial<{ name: string }>) => {
  return await JokeType.findByIdAndUpdate(id, data, { new: true });
};

const deleteJokeType = async (id: string) => {
  return await JokeType.findByIdAndDelete(id);
};

export { getJokeTypes, createJokeType, getJokeTypeById, updateJokeType, deleteJokeType };