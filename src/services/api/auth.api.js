import { buildBasicAuthToken } from '../auth';
import {
    POST, getHttpGetOptions, getHttpPostData, getAuthHeaders, API_HOST, API_PREFIX,
} from '.';


export const getAuthRegisterEndpoint = () => `${API_PREFIX}/auth/register`;


export const getAuthRegisterRequest = (email, password) => [
    getAuthRegisterEndpoint(),
    getHttpPostData({email, password}),
];
