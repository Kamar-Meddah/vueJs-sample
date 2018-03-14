import axios from 'axios';
import {Config} from '@/Config/Config';

export const HTTP = axios.create({
    baseURL: `${Config.HOST}`,
    headers: {
       // Authorization: 'Bearer {token}'
    },
});
