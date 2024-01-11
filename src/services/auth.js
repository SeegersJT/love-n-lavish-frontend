import Cookies from 'js-cookie';

global.Buffer = require('buffer').Buffer;

export const buildBasicAuthToken = (email, password) => {
  const b = Buffer.from(`${email}:${password}`);
  return `Basic ${b.toString('base64')}`;
};

export const setAuthToken = (authToken) => {
  Cookies.set('authToken', authToken);
};

export const deleteAuthTokenCookie = () => {
  Cookies.remove('authToken');
};

export const getAuthToken = () => Cookies.get('authToken');

