// rootSaga.js

import { all } from 'redux-saga/effects';
import { watchForAuthRegisterRequest } from '../sagas/authSaga';

function* rootSaga() {
  yield all([
    watchForAuthRegisterRequest(),
  ]);
}

export default rootSaga;
