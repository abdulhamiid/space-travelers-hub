import axios from 'axios';

// Actions
const FETCH_DATA = 'FETCH_DATA_FROM_API';
const ADD_MEMBER = 'ADD_MEMBER';
const ADD_MISSION = 'ADD_MISSION';

const missions = [];

// reducer
export default function missionsReducer(state = missions, action) {
  switch (action.type) {
    case FETCH_DATA: {
      return action.payload;
    }

    case ADD_MEMBER: {
      return {
        ...state.map((mission) => {
          if (mission.id !== action.id) { return mission; }
          return { ...mission, member: true };
        }),
      };
    }

    case ADD_MISSION: {
      return {
        ...state.map((mission) => {
          if (mission.id === action.id) { return mission; }
          return { ...mission, join_mission: true };
        }),
      };
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

export const addMember = (id) => ({
  type: ADD_MEMBER,
  id,
});

export const addMission = (id) => ({
  type: ADD_MISSION,
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
      member: false,
      join_mission: false,
    };
  });
  dispatch(fetchMission(data));
};
