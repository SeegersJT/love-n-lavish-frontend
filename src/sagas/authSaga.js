import { takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  REQUEST_AUTH_LOGIN,
  REQUEST_AUTH_REGISTER
} from '../actions/authActions';
import { getAuthLoginRequest, getAuthRegisterRequest } from '../services/api/auth.api';
import { TOASTER_CRITICAL, TOASTER_SUCCESS } from '../components/toaster/Toaster';

function* handleAuthRegisterRequest({ email, password, onResponse }) {
  try {
    const [endpoint, requestOptions] = getAuthRegisterRequest(email, password);

    const { data } = yield call(axios, endpoint, requestOptions);

    console.log('data', data);

    yield call(onResponse, data.message, TOASTER_SUCCESS);
  } catch (error) {
    yield call(onResponse, error.response.data.message, TOASTER_CRITICAL);
    console.error(`handleAuthRegisterRequest failed with error: ${error}`)
  }
}

function* handleAuthLoginRequest({ email, password, onResponse }) {
  try {
    const [endpoint, requestOptions] = getAuthLoginRequest(email, password);

    const { data } = yield call(axios, endpoint, requestOptions);

    console.log('data', data);

    yield call(onResponse, data.message, TOASTER_SUCCESS);
  } catch (error) {
    yield call(onResponse, error.response.data.message, TOASTER_CRITICAL);
    console.error(`handleAuthLoginRequest failed with error: ${error}`)
  }
}

export function* watchForAuthRegisterRequest() {
  yield takeLatest(REQUEST_AUTH_REGISTER, handleAuthRegisterRequest);
}

export function* watchForAuthLoginRequest() {
  yield takeLatest(REQUEST_AUTH_LOGIN, handleAuthLoginRequest);
}