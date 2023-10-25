import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Drawer from '@mui/material/Drawer';
import { faBars} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import '../App.css';


function Navbar() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const[open,setOpen]=useState(false);  

  function toggleBtn() {
       setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
  }

  const toggleClass = isDarkTheme ? "toggleinner move" : "toggleinner";

  useEffect(() => {
      if (isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  return (
    <div className="navbar">
      <div className="icon"> 
        <h1>CryptoTracker</h1>
      </div>

        <div className="links">
        <div className="toggleouter" onClick={toggleBtn}>
          <div className={toggleClass}></div>
        </div>
        <Link to={'/'}>Home</Link>
        <Link to={'/compare'}>Compare</Link>
        <Link to={'/dashboard'} className="dashboadbtn">Dashboard</Link>
      </div>
      
        
      <div className="hambtn">
        <button onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faBars} size="2x"/>
        </button>
        <Drawer anchor={'right'} open={open} onClose={() => setOpen(false)} className="inside">
        <div className="custom-paper">
          <Link to={'/'}>Home</Link>
          <Link to={'/compare'}>Compare</Link>
          <Link to={'/dashboard'}>Dashboard</Link>
          <div className="toggleouter" onClick={toggleBtn}>
            <div className={toggleClass}></div>
          </div>
          </div>
         </Drawer>
      </div>
    </div>
  );
}

export default Navbar;
