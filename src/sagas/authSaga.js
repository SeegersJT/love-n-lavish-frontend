// sagas.js

import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
    FETCH_DATA_REQUEST,
    fetchDataSuccess,
    fetchDataFailure,
} from './actions';

function* fetchDataSaga() {
    try {
        // Dispatch action to indicate that data fetching is in progress
        yield put(fetchDataRequest());

        // Make API call using Axios
        const response = yield call(axios.get, 'https://api.example.com/data');

        // Dispatch action with the received data
        yield put(fetchDataSuccess(response.data));
    } catch (error) {
        // Dispatch action in case of an error
        yield put(fetchDataFailure(error));
    }
}

// Watch for FETCH_DATA_REQUEST action and run fetchDataSaga
export function* watchFetchData() {
    yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
}



// export function* performForgotPasswordRequest({ email, ignore = false, onResponse = noOp }) {
//     yield put({ type: actions.FORGOT_PASSWORD_LOADER, loading: true });
//     try {
//       // get endpoint and http request options
//       const [endpoint, requestOptions] = api.getForgottenPasswordRequest(email);
  
//       // make the request, save the response.data
//       const { data } = yield call(axios, endpoint, requestOptions);
  
//       yield call(onResponse, `Successfully Sent Password Reset to: ${email}`, snack.SNACK_SUCCESS);
  
//       // trigger a success action, sending the payload data
//       if (!ignore) {
//         yield put({ type: actions.FORGOT_PASSWORD_SUCCESS, payload: data });
//       }
//     } catch (error) {
//       yield call(onResponse, `Failed to Send Password Reset to: ${email}`, snack.SNACK_CRITICAL);
//       yield put({ type: actions.FORGOT_PASSWORD_FAILURE, payload: 'Something went wrong' });
//     }
  
//     yield put({ type: actions.FORGOT_PASSWORD_LOADER, loading: false });
//   }