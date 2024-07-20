import { getJokeTypes, createJokeType, getJokeTypeById, updateJokeType, deleteJokeType } from '../repositories/jokeType.repository';

const getJokeTypesService = async () => {
  return await getJokeTypes();
};

const createJokeTypeService = async (data: { name: string }) => {
  return await createJokeType(data);
};

const getJokeTypeByIdService = async (id: string) => {
  return await getJokeTypeById(id);
};

const updateJokeTypeService = async (id: string, data: Partial<{ name: string }>) => {
  return await updateJokeType(id, data);
};

const deleteJokeTypeService = async (id: string) => {
  return await deleteJokeType(id);
};

export { getJokeTypesService, createJokeTypeService, getJokeTypeByIdService, updateJokeTypeService, deleteJokeTypeService };
