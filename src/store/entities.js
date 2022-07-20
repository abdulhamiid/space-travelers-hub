import { combineReducers } from '@reduxjs/toolkit';
import rocketsReducer from './rockets';
import missionsReducer from './missions';

export default combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});
