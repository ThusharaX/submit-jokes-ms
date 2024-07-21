import axios from 'axios';
import { envs } from '../config/env';

const getJokeTypesService = async () => {
  const url = `${envs.PROD_DOMAIN}/deliver/joke-types`;
  const response = await axios.get(url);
  return response.data;
};

export { getJokeTypesService };
