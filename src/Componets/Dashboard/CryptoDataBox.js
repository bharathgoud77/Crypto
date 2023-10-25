import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendDown,
  faArrowTrendUp,
  } from "@fortawesome/free-solid-svg-icons";
  import { Link } from 'react-router-dom';
import './dashboard.css';
  


const CryptoDataBox = ({ value, handleChange, filteredCoins }) => {
  if (!filteredCoins) {
    return <h2 className="loader">Loading...</h2>;
  }
    
  return (
    
       <Box sx={{ width: "100%", typography: "body1" }}>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab
            label="Grid"
            value="1"
            className="label"
            style={{ fontWeight: "bold" }}
          />
          <Tab
            label="List"
            value="2"
            className="label"
            style={{ fontWeight: "bold" }}
          />
        </TabList>
      </Box>
      <TabPanel value="1">
         <div className="grid">
          {filteredCoins.map((coin, index) => (
         <Link to={`/coin/${coin.id}`} key={coin.id}>
          <div key={index} className="coinCard">
              <div className="first">
                <div>
                  <img src={coin.image} alt="coin" width={"50px"} />
                </div>
                <div>
                  <h3>{`${coin.symbol.toUpperCase()}-USD`}</h3>
                  <p>{coin.name}</p>
                </div>
              </div>
              <div className="precent">
                {coin.price_change_percentage_24h > 0 ? (
                  <div className="make">
                    <h4 className="green">
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </h4>
                    <h4 className="arrowgreen">
                      <FontAwesomeIcon icon={faArrowTrendUp} />
                    </h4>
                  </div>
                ) : (
                  <div className="make">
                    <h4 className="red">
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </h4>
                    <h4 className="arrowred">
                      <FontAwesomeIcon icon={faArrowTrendDown} />
                    </h4>
                  </div>
                )}
              </div>
              <div>
                <h3
                  style={{
                    color:
                      coin.price_change_percentage_24h > 0
                        ? "green"
                        : "red",
                  }}
                >
                  ${coin.current_price.toLocaleString()}
                </h3>

                <p>Total Volume : ${coin.total_volume.toLocaleString()}</p>
                <p>Market Cap : ${coin.market_cap.toLocaleString()}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </TabPanel>
      <TabPanel value="2">
         <div className="list">
          {filteredCoins.map((coin,index) => (
           <Link to={`/coin/${coin.id}`} key={coin.id}>
              <div key={index} className="coinList">
               <div>
                 <img src={coin.image} alt="coin" width={"50px"} />
               </div>
               <div>
                 <h3>{`${coin.symbol.toUpperCase()}-USD`}</h3>
                 <p>{coin.name}</p>
               </div>
               <div className="precent">
                {coin.price_change_percentage_24h > 0 ? (
                  <div className="make">
                    <h4 className="green">
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </h4>
                    <h4 className="arrowgreen">
                      <FontAwesomeIcon icon={faArrowTrendUp} />
                    </h4>
                  </div>
                ) : (
                  <div className="make">
                    <h4 className="red">
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </h4>
                    <h4 className="arrowred">
                      <FontAwesomeIcon icon={faArrowTrendDown} />
                    </h4>
                  </div>
                )}
              </div>
              <span
                style={{
                  color:
                    coin.price_change_percentage_24h > 0 ? "green" : "red",
                }}
              >
                ${coin.current_price.toLocaleString()}
              </span>
              <span>${coin.total_volume.toLocaleString()}</span>
              <span>${coin.market_cap.toLocaleString()}</span>
            </div> 
            </Link>
          ))}
        </div>
      </TabPanel>
    </TabContext>
  </Box>
    );
 
};

export default CryptoDataBox;


