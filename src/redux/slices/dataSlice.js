import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  startDate: '',
  endDate: '',
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
  },
});

export const {setStartDate, setEndDate} = dataSlice.actions;

export default dataSlice.reducer;
