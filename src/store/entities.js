import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets';
import missionsReducer from './missions';

export default configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});
