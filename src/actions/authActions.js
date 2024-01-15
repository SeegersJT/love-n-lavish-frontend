import { noOp } from "../services/helper";

export const REQUEST_AUTH_REGISTER = 'REQUEST_AUTH_REGISTER';
export const REQUEST_AUTH_LOGIN = 'REQUEST_AUTH_LOGIN';
export const REQUEST_AUTH_LOGOUT = 'REQUEST_AUTH_LOGOUT';

export const SET_AUTH_DESTINATION = 'SET_AUTH_DESTINATION';
export const REMOVE_AUTH_DESTINATION = 'REMOVE_AUTH_DESTINATION';

export const requestAuthRegister = (email, password, onResponse = noOp, onSuccess = noOp) => ({
    type: REQUEST_AUTH_REGISTER,
    email,
    password,
    onResponse,
    onSuccess
});

export const requestAuthLogin = (email, password, onResponse = noOp, onSuccess = noOp) => ({
    type: REQUEST_AUTH_LOGIN,
    email,
    password,
    onResponse,
    onSuccess
});

export const setAuthDestination = (destination) => ({
    type: SET_AUTH_DESTINATION,
    destination,
});

export const removeAuthDestination = () => ({
    type: SET_AUTH_DESTINATION,
});

export const requestAuthLogout = (onSuccess = noOp) => ({
    type: REQUEST_AUTH_LOGOUT,
    onSuccess,
});