import { getAuthToken } from '../auth';
import { isNull } from '../helper';

export const API_HOST = process.env.REACT_APP_API_HOST;
export const API_PREFIX = `${API_HOST}/api`;

export const POST = 'POST';
export const PUT = 'PUT';
export const GET = 'GET';
export const DELETE = 'DELETE';

export const getHttpGetOptions = (headers = null, params = null, responseType = null) => ({
    method: GET,
    headers,
    params,
    responseType,
});

export const getHttpPostData = (data, headers = null, params = null) => ({
    method: POST,
    data,
    headers,
    params,
});

export const getHttpPutData = (data, headers = null, params = null) => ({
    method: PUT,
    data,
    headers,
    params,
});

export const getHttpDeleteOptions = (headers = null) => ({
    method: DELETE,
    headers,
});

export const getAuthHeaders = (accessToken = null) => {
    let authToken = accessToken;

    if (isNull(authToken)) {
        authToken = getAuthToken();
    }

    return ({
        Authorization: `Bearer ${authToken}`,
    });
};
