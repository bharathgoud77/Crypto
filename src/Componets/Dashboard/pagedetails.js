import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './dashboard.css';
import LineChart from '../LineChart';
import { fetchData, fetchMarketChartData } from "../Fetchingdata";
import ToggleButtons from "../ToggleButtons";
import BasicSelect from "../BasicSelect";
import CoinList from "../CoinList";

function Pagedetails() {
  const { id } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState([]);
  const [Changeprice, setChangeprice] = useState('prices'); 

  const handlepriceType = (event, newType) => {
       setChangeprice(newType);
      };
  
  const handleDaysChange = (event) => {
        setDays(event.target.value);
     };

  useEffect(() => {
    const fetchDataAndUpdateChart = async () => {
      try {
        const coinDataResponse = await fetchData(id);
        setCoinData(coinDataResponse);
  
        const chartDataResponse = await fetchMarketChartData(id, days, Changeprice);
        setChartData(chartDataResponse); 
        } catch (error) {
        console.error(error);
      }
    };
      fetchDataAndUpdateChart(); 
  }, [id, days, Changeprice]);
   
  if (coinData === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="coindetalspage">
      <div className="listcontainer">
       <CoinList coinData={coinData}/>
       </div>
      <div className="chart">
           <BasicSelect days={days} handleDaysChange={handleDaysChange} />
           <ToggleButtons Changeprice={Changeprice} handlepriceType={handlepriceType} />
            <LineChart chartData={chartData} Changeprice={Changeprice}/>
      </div>
      <div className="coininfo">
        <h2>{coinData.name}</h2>
        {coinData.description && coinData.description.en ? (
          <p>{coinData.description.en}</p>
        ) : (
          <p>Description not available.</p>
        )}
      </div>
    </div>
  );
}

export default Pagedetails;




