import React from 'react';
import { Line } from 'react-chartjs-2';
import { convertDate } from './Fetchingdata';


 const LineChart = ({ chartData,multiAxis,Changeprice}) => {
  if (!chartData?.prices) {
    return <p>No data available</p>;
  }
  
  const data = {
    labels: chartData.prices.map((price) => convertDate(price[0])),
    datasets: [
      { 
       label:'prices',
        data: chartData[Changeprice].map((price) => price[1]),
        fill: false,
        borderColor: '#3a80e9',
        borderWidth: 2,
        tension: 0.26,
        pointRadius: 0,
      },
    ],
  };
  
  const options = {
    plugins: { 
      length: {
        display: multiAxis ? true : false,
      },
    },
    response: true,
    interaction: {
      mode: "index",
    },
    scales: {
      y: {
        ticks: {
          callback: function (value, index, ticks) {
           if(Changeprice==="prices") return "$" + value.toLocaleString();
           else{
            return `$${(value / 1000000000).toFixed(2)}B`
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