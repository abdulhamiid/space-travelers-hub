import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getRockets from '../modules/rocketsAPI';

export const fetchRocketsFromAPI = createAsyncThunk(
  'rockets/fetchRocketsFromAPI',
  async () => {
    const response = await getRockets();
    return response;
  },
);

const slice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    reserveRocket(rockets, action) {
      /* eslint-disable no-param-reassign */
      const id = rockets.findIndex(((rocket) => (rocket.id === action.payload.id)));
      rockets[id].reserved = true;
    },
    cancelReservation(rockets, action) {
      /* eslint-disable no-param-reassign */
      const id = rockets.findIndex(((rocket) => (rocket.id === action.payload.id)));
      rockets[id].reserved = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRocketsFromAPI.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});

export const { reserveRocket, cancelReservation } = slice.actions;
export default slice.reducer;
