import axios from 'axios';

// Actions
const FETCH_DATA = 'FETCH_DATA_FROM_API';
const TOGGLE_RESERVATION = 'TOGGLE_RESERVATION';

const missions = [];

// reducer
export default function missionsReducer(state = missions, action) {
  switch (action.type) {
    case FETCH_DATA: {
      return action.payload;
    }

    case TOGGLE_RESERVATION: {
      return state.map((mission) => {
        if (mission.mission_id !== action.id) {
          return mission;
        }
        return { ...mission, reserved: !mission.reserved };
      });
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

export const joinMission = (id) => ({
  type: TOGGLE_RESERVATION,
  id,
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
      reserved: false,
    };
  });
  dispatch(fetchMission(data));
};
