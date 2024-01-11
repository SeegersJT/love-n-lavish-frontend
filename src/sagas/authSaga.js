import { takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  REQUEST_AUTH_REGISTER
} from '../actions/authActions';
import { getAuthRegisterRequest } from '../services/api/auth.api';

function* handleAuthRegisterRequest({email, password}) {
  console.log('email', email)
  console.log('password', password)
    try {
      const [endpoint, requestOptions] = getAuthRegisterRequest(email, password);

      console.log('endpoint', endpoint)
      console.log('requestOptions', requestOptions)

      const response = yield call(axios, endpoint, requestOptions);

      console.log('message', response.message);
      console.log('email', response.email);
      console.log('token', response.token);
    } catch (error) {
        // yield put(fetchDataFailure(error)); // Remove some authTokens or som som
        console.error(`Failed to Register`) // Better errorhandling to follow.
    }
}

// Watch for FETCH_DATA_REQUEST action and run fetchDataSaga
export function* watchForAuthRegisterRequest() {
    yield takeLatest(REQUEST_AUTH_REGISTER, handleAuthRegisterRequest);
}