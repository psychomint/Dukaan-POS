import { createSlice } from "@reduxjs/toolkit";

const dateRangeSlice = createSlice({
  name: "dateRange",
  initialState: {
    startDate: null,
    endDate: null,
  },
  reducers: {
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
  },
});

export const { setStartDate, setEndDate } = dateRangeSlice.actions;
export default dateRangeSlice.reducer;
