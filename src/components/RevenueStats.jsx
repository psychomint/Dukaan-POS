import React, { useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import { useDispatch, useSelector } from "react-redux";
import { setChartData, setMonth } from "../slices/revenueStatsSlice";

function RevenueStats({ATSdata}) {

  const dispatch = useDispatch();
  const { chartData, month } = useSelector((state) => state.revenueStats);

  useEffect(() => {
    dispatch(setChartData(ATSdata.map((item) => item.revenue)));
    dispatch(setMonth(ATSdata.map((item) => item.period)));
    
  }, [ATSdata, dispatch]);

  const option = {
    title: {
      text: "All-Time Revenue Stats",
      left: "center",
      textStyle: {
        fontSize: 18,
        fontWeight: "bold",
      },
      top: 10, // Set title's vertical position
    },
    legend: {
      orient: "horizontal",
      top: 50, // Position it below the title to create the gap
      textStyle: {
        fontSize: 12,
        color: "#555",
      },
    },
    grid: {
      top: 80, // Push the chart below the title and legend
      bottom: 60,
      left: 60,
      right: 30,
    },
    xAxis: {
      type: "category",
      data: month,
      axisLabel: {
        rotate: 45,
        fontSize: 12,
        color: "#555",
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        fontSize: 12,
        color: "#555",
      },
    },
    series: [
      {
        name: "Revenue",
        data: chartData,
        type: "bar",
        barWidth: "50%",
        itemStyle: {
          color: "#3b82f6",
          borderRadius: [4, 4, 0, 0],
        },
        label: {
          show: true,
          position: "top",
          formatter: "{c}",
        },
      },
      {
        name: "Revenue",
        data: chartData,
        type: "line",
      },
    ],
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      textStyle: {
        color: "#ffffff",
      },
    },
    animationEasing: "elasticOut",
    animationDuration: 1000,
  };
  

  return (
    <div className="bg-white shadow-lg p-6 rounded-xl">
      <ReactEcharts option={option} style={{ height: "400px", width: "100%" }}/>
    </div>
  );
}

export default RevenueStats;
