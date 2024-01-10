// rootSaga.js

import { all } from 'redux-saga/effects';
import { watchFetchData } from './sagas';

function* rootSaga() {
  yield all([
    // Add other sagas here
    watchFetchData(),
  ]);
}

export default rootSaga;
