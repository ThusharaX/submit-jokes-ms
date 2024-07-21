import axios from "axios";
import { envs } from "../config/env";

const getJokeTypesService = async () => {
  const url = `${envs.BACKEND_DOMAIN}/deliver/joke-types`;
  const response = await axios.get(url);
  return response.data;
};

export { getJokeTypesService };
