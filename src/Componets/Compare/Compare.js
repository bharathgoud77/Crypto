import React, { useState, useEffect } from "react";
import "./compare.css";
import "../Dashboard/dashboard.css";
import SelectCoin from "./SelectCoin";
import { fetchMarketChartData, fetchData } from "../Fetchingdata";
import { useParams } from "react-router-dom";
import BasicSelect from "../BasicSelect";
import CoinList from "../CoinList";
import LineChart from "./MultilineChat";
import ToggleButtons from "../ToggleButtons";

function Compare() {
  const { id } = useParams();
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1data, setCrypto1data] = useState(null);
  const [crypto2data, setCrypto2data] = useState(null);
  const [Changeprice, setChangeprice] = useState("prices");
  const [chartData1, setChartData1] = useState([]); 
  const [chartData2, setChartData2] = useState([]); 
  const [days, setDays] = useState(30);

  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  const handlepriceType = (event, newType) => {
    setChangeprice(newType);
  };

  const handleCryptoChange = async (event, iscoin2) => {
    if (iscoin2) {
      setCrypto2(event.target.value);
    } else {
      setCrypto1(event.target.value);
    }
  };

  useEffect(() => {
    const fetchDataAndUpdateChart = async () => {
      try {
        const coinDataResponse1 = await fetchData(crypto1); 
        setCrypto1data(coinDataResponse1);

        const coinDataResponse2 = await fetchData(crypto2); 
        setCrypto2data(coinDataResponse2);

        const chartDataResponse1 = await fetchMarketChartData(
          crypto1,
          days,
          Changeprice
        );
        setChartData1(chartDataResponse1);

        const chartDataResponse2 = await fetchMarketChartData(
          crypto2,
          days,
          Changeprice
        );
        setChartData2(chartDataResponse2);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataAndUpdateChart();
  }, [id, crypto1, crypto2, days, Changeprice]);

  if (crypto2data === null || crypto1data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="compare">
      <div className="cryptoo">
        <SelectCoin
          crypto1={crypto1}
          crypto2={crypto2}
          handleCryptoChange={handleCryptoChange}
        />
        <BasicSelect days={days} handleDaysChange={handleDaysChange} />
      </div>
      <div className="listcontainer">
      {crypto1data && <CoinList coinData={crypto1data} />}
      {crypto2data && <CoinList coinData={crypto2data} />}
      </div>
      <div className="chart">
        <ToggleButtons Changeprice={Changeprice} handlepriceType={handlepriceType} />
        <p className="text">Comparison between {crypto1data.name} and {crypto2data.name} </p>
        {chartData1 && chartData2 && (
          <LineChart chartData1={chartData1} chartData2={chartData2} Changeprice={Changeprice} crypto1data={crypto1data} crypto2data={crypto2data}/>
        )}
      </div>

      <div className="coininfodiv">
        <div className="coininfo">
          <h2>{crypto1data.name}</h2>
          {crypto1data.description && crypto1data.description.en ? (
            <p>{crypto1data.description.en}</p>
          ) : (
            <p>Description not available.</p>
          )}
        </div>
        <div className="coininfo">
          <h2>{crypto2data.name}</h2>
          {crypto2data.description && crypto2data.description.en ? (
            <p>{crypto2data.description.en}</p>
          ) : (
            <p>Description not available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Compare;
