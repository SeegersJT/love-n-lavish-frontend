// rootSaga.js

import { all } from 'redux-saga/effects';
import { watchForAuthLoginRequest, watchForAuthLogoutRequest, watchForAuthRegisterRequest } from '../sagas/authSaga';

function* rootSaga() {
  yield all([
    watchForAuthRegisterRequest(),
    watchForAuthLoginRequest(),
    watchForAuthLogoutRequest(),
  ]);
}

export default rootSaga;
