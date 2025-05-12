import axios from "axios";
import { getUrls } from "../utils/urls";
import { getCookie } from "../services/utils/cookies";

class CliengoClientError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CliengoClientError';
  }
}

export const getCliengoClient = (args: {
  jwt?: string;
  baseUrl?: string;
}) => {
  let baseUrl = args.baseUrl || '';
  let jwt = args.jwt || '';

  if (!baseUrl) {
    const env = process.env.ENVIRONMENT || process.env.NEXT_PUBLIC_ENVIRONMENT;

    if (!env) {
      console.warn('CliengoClient: Environment is not set, serving stage URL by default.');
    }

    baseUrl = getUrls(env as string).API_URL;

     if (!baseUrl) {
      throw new CliengoClientError('Base URL is required');
     }
  }

  if (!jwt) {
    const _jwt = getCookie('jwt');

    if (!jwt) {
      throw new CliengoClientError('JWT is required');
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
