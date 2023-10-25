import React, { useState, useEffect } from "react";
import './dashboard.css';
import PaginationControlled from "./Pagination";
import CryptoDataBox from "./CryptoDataBox"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [page, setPage] = useState(1);
  const coinsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        );
        const data = await res.json();
        setCoins(data);
        setFilteredCoins(data.slice(0, coinsPerPage));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1); 
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    const startIndex = (value - 1) * coinsPerPage;
    const endIndex = startIndex + coinsPerPage;
    setFilteredCoins(coins.slice(startIndex, endIndex));
  };

  useEffect(() => {
    const filtered = coins.filter((coin) =>
      coin.name.toUpperCase().includes(search.toUpperCase())
    );
    setPage(1);
    setFilteredCoins(filtered.slice(0, coinsPerPage));
  }, [coins, search]);

  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="dashboardpage">
      <div className="searchbar">
        <FontAwesomeIcon
          icon={faSearch}
          style={{ marginRight: "10px", marginLeft: "10px" }}
        />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <CryptoDataBox
        value={value}
        handleChange={handleChange}
        filteredCoins={filteredCoins}
      />
     
      <PaginationControlled page={page} handleChange={handlePageChange} />
    </div>
  );
}

export default Dashboard;
