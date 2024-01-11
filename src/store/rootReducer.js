import { combineReducers } from 'redux';

import authReducer from '../reducers/authReducer'
import systemReducer from '../reducers/systemReducer'

const rootReducer = combineReducers({
  system: systemReducer,
  auth: authReducer,
});

export default rootReducer;
