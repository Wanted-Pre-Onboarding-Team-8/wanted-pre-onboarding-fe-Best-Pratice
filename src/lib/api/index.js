import axios from 'axios';
import { getStorageItem } from '../util/storage';

const BASE_API_ENDPOINT =
  'https://n38lcff1wk.execute-api.ap-northeast-2.amazonaws.com';

const baseAPI = axios.create({
  baseURL: BASE_API_ENDPOINT,
  headers: getStorageItem('token')
    ? {
        Authorization: `Bearer ${String(getStorageItem('token'))}`,
      }
    : undefined,
});

export default baseAPI;
