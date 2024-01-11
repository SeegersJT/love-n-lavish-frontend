export const REQUEST_AUTH_REGISTER = 'REQUEST_AUTH_REGISTER';

export const requestAuthRegister = (email, password) => ({
    type: REQUEST_AUTH_REGISTER,
    email,
    password
});