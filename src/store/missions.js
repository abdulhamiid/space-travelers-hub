import axios from 'axios';

// Actions
const FETCH_DATA = 'FETCH_DATA_FROM_API';

const missions = [];

// reducer
export default function missionsReducer(state = missions, action) {
  switch (action.type) {
    case FETCH_DATA: {
      return action.payload;
    }

    default:
      return state;
  }
}

// Action Creators
const fetchMission = (payload) => ({
  type: FETCH_DATA,
  payload,
});

/* eslint-disable camelcase */

// mission api
const url = 'https://api.spacexdata.com/v3/missions';

export const fetchData = () => async (dispatch) => {
  const response = await axios.get(url);
  const data = Object.entries(response.data).map((item) => {
    const {
      mission_id, mission_name, description,
    } = item[1];
    return {
      mission_id,
      mission_name,
      description,
    };
  });
  dispatch(fetchMission(data));
};
