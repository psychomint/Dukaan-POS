import { createSlice } from "@reduxjs/toolkit";

const revenueStatsSlice = createSlice({
    name: "revenueStats",
    initialState: {
        chartData : null,
        month: null,
    },
    reducers: {
        setChartData: (state, action) => {
            state.chartData = action.payload;
        },
        setMonth: (state, action) => {
            state.month = action.payload;
        }
    }
})

export const {setChartData, setMonth} = revenueStatsSlice.actions;
export default revenueStatsSlice.reducer;