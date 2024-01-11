import {
    getHttpPostData, API_PREFIX, POST,
} from '.';
import { buildBasicAuthToken } from '../auth';

const getAuthRequestOptions = (username, password) => ({
    method: POST,
    headers: {
        Authorization: buildBasicAuthToken(username, password),
    },
});

export const getAuthRegisterEndpoint = () => `${API_PREFIX}/auth/register`;
export const getAuthLoginEndpoint = () => `${API_PREFIX}/auth/login`;


export const getAuthRegisterRequest = (email, password) => [
    getAuthRegisterEndpoint(),
    getHttpPostData({ email, password }),
];

export const getAuthLoginRequest = (email, password) => [
    getAuthLoginEndpoint(),
    getAuthRequestOptions(email, password),
];
