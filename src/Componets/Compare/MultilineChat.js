import React from 'react';
import { Line } from 'react-chartjs-2';
import { convertDate } from '../Fetchingdata';



const LineChart = ({ chartData1, chartData2, Changeprice, crypto1data, crypto2data }) => {
  if (!chartData1 || !chartData2) {
    return <p>No data available</p>;
  } 

  if (!chartData1.prices || !chartData1[Changeprice] || !chartData2[Changeprice]) {
    return <p>Some data is missing</p>;
  }

  const data = {
    labels: chartData1.prices.map((price) => convertDate(price[0])),
    datasets: [
      {
        label: crypto1data.name,
        data: chartData1[Changeprice].map((price) => price[1]),
        fill: false,
        borderColor: '#3a80e9',
        borderWidth: 2,
        tension: 0.26,
        pointRadius: 0,
        yAxisID: 'left-y-axis',
      },
      {
        label: crypto2data.name,
        data: chartData2[Changeprice].map((price) => price[1]),
        fill: false,
        borderColor: '#e93a3a',
        borderWidth: 2,
        tension: 0.26,
        pointRadius: 0,
        yAxisID: 'right-y-axis', 
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
        },  
      },
      'left-y-axis': {
        display: true,
        position: 'left',
        title: {
          display: true,
        },
        ticks: {
          callback: function (value) {
            if (Changeprice === "prices") {
              return "$" + value.toLocaleString();
            } else {
              return `$${(value / 1000000000).toFixed(2)}B`;
            }
          },
        },
      },
      'right-y-axis': {
        display: true,
        position: 'right',
        title: {
          display: true,
        },
        ticks: {
          callback: function (value) {
            if (Changeprice === "prices") {
              return "$" + value.toLocaleString();
            } else {
              return `$${(value / 1000000000).toFixed(2)}B`;
            }
          },
        },
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;

