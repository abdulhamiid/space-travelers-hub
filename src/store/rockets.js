import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    checkStatus: () => 'Under construction',
  },
});

export const { checkStatus } = slice.actions;

export default slice.reducer;
