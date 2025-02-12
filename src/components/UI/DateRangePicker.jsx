import React, { useCallback } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { setStartDate, setEndDate } from "../../slices/dateRangeSlice";

const DateRangePicker = () => {
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector((state) => state.dateRange);

  const onChange = useCallback((dates) => {
    const [start, end] = dates;
    dispatch(setStartDate(start));
    dispatch(setEndDate(end));
  }, [dispatch]);

  return (
    <div className="flex items-center gap-4 p-4 bg-white shadow-sm rounded-xl">
      <label className="text-gray-600 font-medium">Select Date Range:</label>
      <DatePicker
        className="border rounded-lg px-3 py-1 text-gray-700 focus:outline-none focus:ring focus:ring-blue-400"
        selected={startDate || null}
        onChange={onChange}
        startDate={startDate || null}
        endDate={endDate || null}
        maxDate={new Date()}
        selectsRange
        isClearable
        placeholderText="Pick a date range"
      />
    </div>
  );
};

export default DateRangePicker;
