import { takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  REQUEST_AUTH_LOGIN,
  REQUEST_AUTH_LOGOUT,
  REQUEST_AUTH_REGISTER
} from '../actions/authActions';
import { getAuthLoginRequest, getAuthRegisterRequest } from '../services/api/auth.api';
import { TOASTER_CRITICAL, TOASTER_SUCCESS } from '../components/toaster/Toaster';
import { isUndefined } from '../services/helper';
import { deleteAuthTokenCookie, setAuthToken } from '../services/auth';

function* handleAuthRegisterRequest({ email, password, onResponse, onSuccess }) {
  try {
    const [endpoint, requestOptions] = getAuthRegisterRequest(email, password);

    const { data } = yield call(axios, endpoint, requestOptions);

    yield call(onResponse, data.message, TOASTER_SUCCESS);
    yield call(onSuccess);
  } catch (error) {
    yield call(onResponse, error.response.data.message, TOASTER_CRITICAL);
    console.error(`handleAuthRegisterRequest failed with error: ${error}`)
  }
}

function* handleAuthLoginRequest({ email, password, onResponse, onSuccess }) {
  try {
    const [endpoint, requestOptions] = getAuthLoginRequest(email, password);

    const { data } = yield call(axios, endpoint, requestOptions);

    setAuthToken(data.token);

    yield call(onResponse, data.message, TOASTER_SUCCESS);
    yield call(onSuccess);
  } catch (error) {
    let message = 'Something Went Wrong';

    if (!isUndefined(error.response)) {
      message = error.response.data.message;
    };

    yield call(onResponse, message, TOASTER_CRITICAL);
    console.error(`handleAuthLoginRequest failed with error: ${error}`)
  }
}

function* handleAuthLogoutRequest({ onSuccess }) {
  try {
    deleteAuthTokenCookie();

    yield call(onSuccess);
  } catch (error) {
    console.error(`handleAuthLogoutRequest failed with error: ${error}`)
  }
}

export function* watchForAuthRegisterRequest() {
  yield takeLatest(REQUEST_AUTH_REGISTER, handleAuthRegisterRequest);
}

export function* watchForAuthLoginRequest() {
  yield takeLatest(REQUEST_AUTH_LOGIN, handleAuthLoginRequest);
}

export function* watchForAuthLogoutRequest() {
  yield takeLatest(REQUEST_AUTH_LOGOUT, handleAuthLogoutRequest);
}