// import { createSlice } from '@reduxjs/toolkit';

// const slice = createSlice({
//   name: 'missions',
//   initialState: [],
//   reducers: {
//     checkStatus: () => 'Under construction',
//   },
// });

// export const { checkStatus } = slice.actions;

// export default slice.reducer;

import axios from 'axios';
const allMission = []

// Actions
const FETCH_DATA = 'FETCH_DATA_FROM_API';

// Action Creators
const fetch = (mission) => ({
  type: FETCH_DATA,
  payload: mission,
});

// mission api
const url = 'https://api.spacexdata.com/v3/missions';

export const fetchdata = () => async (dispatch) => {
  const response = await axios.get(url);
  const data = Object.entries(response.data).map((item) => {
    const {
      mission_id, mission_name, description
    } = item;
    return {
      mission_id,
      mission_name,
      description,
    };
  });
  dispatch(fetch(data));
};