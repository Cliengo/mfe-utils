import axios from "axios";
import { checkEnvUrl, getUrls } from "../utils/urls";
import { getCookie } from "../services/utils/cookies";

class ZordonClientError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ZordonClientError';
  }
}

export const getZordonClient = (args: {
  jwt?: string;
  baseUrl?: string;
}) => {
  let baseUrl = args.baseUrl || '';
  let jwt = args.jwt || '';

  if (!baseUrl) {
    const env = process.env.ENVIRONMENT || process.env.NEXT_PUBLIC_ENVIRONMENT;

    if (!env) {
      console.warn('ZordonClient: Environment is not set, serving stage URL by default.');
    }

    checkEnvUrl('ZordonClient', baseUrl);

    baseUrl = getUrls(env as string).ZORDON_URL;

     if (!baseUrl) {
      throw new ZordonClientError('Base URL is required');
     }
  }

  if (!jwt) {
    const _jwt = getCookie('jwt');

    if (!_jwt) {
      throw new ZordonClientError('JWT is required');
    }

    jwt = _jwt as string;
  }

  const options = {
    baseURL: baseUrl,
    headers: {
      Authorization: jwt,
    },
  }

  return axios.create(options);
}

