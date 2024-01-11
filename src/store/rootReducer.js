// rootReducer.js

import { combineReducers } from 'redux';
import dataReducer from '../reducers/authReducer'

const rootReducer = combineReducers({
  // Add other reducers here
  data: dataReducer,
});

export default rootReducer;
