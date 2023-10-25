import  React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import '../App.css';

export default function ToggleButtons({Changeprice,handlepriceType}) {
    
  return (
    <div className='ToggleButtons'>
    <ToggleButtonGroup
      color="primary"
      value={Changeprice}
      exclusive
      onChange={handlepriceType}
            >

      <ToggleButton value="prices" style={{ borderColor: '#3a80e9',color:'#3a80e9',fontWeight:'600' }}>PRICE</ToggleButton>
      <ToggleButton value="market_caps" style={{ borderColor: '#3a80e9', color:'#3a80e9',fontWeight:'600' }}>MKT CAP</ToggleButton>
      <ToggleButton value="total_volumes" style={{ borderColor: '#3a80e9', color:'#3a80e9',fontWeight:'600' }}>VOLUME</ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}