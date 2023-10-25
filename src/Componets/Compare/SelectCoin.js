import React,{useState,useEffect} from "react";
import { fetchCoinData } from "../Fetchingdata";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './compare.css';


function SelectCoin({crypto1,crypto2,handleCryptoChange}){

        const [cryptocoinData,setCrypto1coinData]=useState([]);
      
        

      
      useEffect(() => {
        const fetchData = async () => {
          try {
            const coinDataResponse = await fetchCoinData();
            setCrypto1coinData(coinDataResponse);
           } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);

    return(
        <div className="selectCoin"> 
        <div sx={{ minWidth: 120}}>
        <p  style={{display:"inline",margin:'10px',color:'black'}}>Crypto 1</p>
        <Select
          value={crypto1}
          label="Crypto 1"
          onChange={(event)=>handleCryptoChange(event,false)}
         style={{height:"30px",border: '1px solid grey'}} 
         
        >
         {cryptocoinData.filter((item)=>item.id!==crypto2).map((coin)=>(
           <MenuItem value={coin.id}>{coin.name}</MenuItem>
         ))}   
       </Select>
        </div>
        
        
  <div sx={{ minWidth: 120 }}>
  <p style={{ display: "inline", margin: '7px', color: 'black' }}>Crypto 2</p>
  <Select
    value={crypto2}
    label="Crypto 2"
    onChange={(event) => handleCryptoChange(event, true)}
    style={{ height: "30px",border: '1px solid grey' }}
    
     >
    {cryptocoinData.filter((item) => item.id !== crypto1).map((coin, index) => (
      <MenuItem key={coin.index} value={coin.id} >
        {coin.name}
      </MenuItem>
    ))}
  </Select>
</div>

        
        </div>
    )
}

export default SelectCoin;