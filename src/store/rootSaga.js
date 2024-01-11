// rootSaga.js

import { all } from 'redux-saga/effects';
import { watchForAuthLoginRequest, watchForAuthRegisterRequest } from '../sagas/authSaga';

function* rootSaga() {
  yield all([
    watchForAuthRegisterRequest(),
    watchForAuthLoginRequest(),
  ]);
}

export default rootSaga;
