import axios from 'axios';

const BASE_API_ENDPOINT =
  'https://n38lcff1wk.execute-api.ap-northeast-2.amazonaws.com';

const baseAPI = axios.create({
  baseURL: BASE_API_ENDPOINT,
  headers: window.localStorage.getItem('token')
    ? {
        Authorization: `Bearer ${String(window.localStorage.getItem('token'))}`,
      }
    : undefined,
});

export default baseAPI;
