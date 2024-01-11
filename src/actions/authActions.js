export const REQUEST_AUTH_REGISTER = 'REQUEST_AUTH_REGISTER';
export const REQUEST_AUTH_LOGIN = 'REQUEST_AUTH_LOGIN';

export const requestAuthRegister = (email, password, onResponse) => ({
    type: REQUEST_AUTH_REGISTER,
    email,
    password,
    onResponse
});

export const requestAuthLogin = (email, password, onResponse) => ({
    type: REQUEST_AUTH_LOGIN,
    email,
    password,
    onResponse
});