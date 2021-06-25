import axios from 'axios';

const BASE_URL = 'https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge';

// eslint-disable-next-line import/prefer-default-export
export const API = axios.create({
  baseURL: BASE_URL,
});
