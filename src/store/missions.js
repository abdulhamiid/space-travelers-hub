import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    checkStatus: () => 'Under construction',
  },
});

export const { checkStatus } = slice.actions;

export default slice.reducer;
