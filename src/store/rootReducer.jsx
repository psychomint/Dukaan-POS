import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlice';
import dateRangeReducer from '../slices/dateRangeSlice';
import revenueStatsReducer from '../slices/revenueStatsSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  dateRange: dateRangeReducer,
  revenueStats: revenueStatsReducer,
});

export default rootReducer;
