import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendDown, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import './Dashboard/dashboard.css';

function CoinList({coinData}){

    return(
        <div className="coinList another" >
        <div>
          <img src={coinData.image.large} alt="coin" width={"50px"} />
        </div>
        <div>
          <h3>{`${coinData.symbol.toUpperCase()}-USD`}</h3>
          <p>{coinData.name}</p>
        </div>
        <div className="precent">
          {coinData.market_data.price_change_percentage_24h > 0 ? (
            <div className="make">
              <h4 className="green">
                {coinData.market_data.price_change_percentage_24h.toFixed(2)}%
              </h4>
              <h4 className="arrowgreen">
                <FontAwesomeIcon icon={faArrowTrendUp} />
              </h4>
            </div>
          ) : (
            <div className="make">
              <h4 className="red">
                {coinData.market_data.price_change_percentage_24h.toFixed(2)}%
              </h4>
              <h4 className="arrowred">
                <FontAwesomeIcon icon={faArrowTrendDown} />
              </h4>
            </div>
          )}
        </div>
        <span
          style={{
            color: coinData.market_data.price_change_percentage_24h > 0 ? "green" : "red",
          }}
        >
          ${coinData.market_data.current_price.usd.toLocaleString()}
        </span>
        <span>${coinData.market_data.total_volume.usd.toLocaleString()}</span>
        <span>${coinData.market_data.market_cap.usd.toLocaleString()}</span>
      </div>
    )
}

export default CoinList;