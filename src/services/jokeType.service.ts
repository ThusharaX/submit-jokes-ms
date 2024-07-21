import axios from 'axios';

const getJokeTypesService = async () => {
  const url = 'http://localhost:3003/joke-types';
  const response = await axios.get(url);
  return response.data;
};

export { getJokeTypesService };
