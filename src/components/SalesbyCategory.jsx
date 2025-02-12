import ReactEcharts from "echarts-for-react";

const SalesbyCategory = ({ ATSdata }) => {
  // Option for the pie chart
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',  // Show category, value, and percentage in tooltip
    },
    legend: {
      top: '5%',
      left: '80%',  // Move legend to the right to avoid overlap with the chart
      orient: 'vertical', // Stack the legend vertically
      itemWidth: 12,  // Adjust the size of legend items
      itemHeight: 12,
      textStyle: {
        fontSize: 14, // Increase the font size for better readability
        color: '#333', // Adjust color for better visibility
      },
      itemGap: 20, // Add gap between legend items
    },
    series: [
      {
        name: 'Sales by Category',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: true,  // Ensure labels do not overlap
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: true,
          position: 'outside',
          formatter: '{b}: {d}%',  // Format the label to show category and percentage
          fontSize: 14,
          color: '#333',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',  // Darker color on hover for emphasis
          },
        },
        labelLine: {
          show: true,
          length: 15,  // Adjust label line length to make it more readable
          lineStyle: {
            width: 5,
            type: 'solid',
            color: '#aaa',  // Adjust color of label lines
          },
        },
        data: [
          ...ATSdata.map((item) => ({
            value: item.value || 0,  // Ensure a default value of 0 for missing data
            name: item.name || 'Unknown',  // Default to 'Unknown' for missing categories
          })),
        ],
      },
    ],
    grid: {
      left: '10%',
      right: '10%',
      top: '10%',
      bottom: '10%',
    },
  };

  return (
    <div className="p-4 bg-white shadow-sm rounded-xl">
      <ReactEcharts option={option} style={{ height: '400px', width: '100%' }} />
    </div>
  );
};

export default SalesbyCategory;
