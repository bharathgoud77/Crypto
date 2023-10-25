import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

function Footer(){
    return(
        <div className="footer">
        <Link to={'/dashboard'} className="dashboardbtn">Dashboard</Link>
        <Link to={'#'} className="sharebtn">Share</Link>
        </div>
    )
}

export default Footer;     