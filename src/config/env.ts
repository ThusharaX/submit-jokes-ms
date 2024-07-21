import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
  PORT: get('PORT').required().asPortNumber(),
  NODE_ENV: get('NODE_ENV').default('development').asString(),
  MONGO_URI: get('MONGO_URI').required().asString(),
  LOCAL_DOMAIN: get('LOCAL_DOMAIN').required().asString(),
  PROD_DOMAIN: get('PROD_DOMAIN').required().asString(),
};