import React from "react";
import gre from './phoneback.png';
import  phone from './phone.png';
import {motion} from 'framer-motion'; 
import './Home.css';
import Footer from "./Footer";

function Main(){
    return(
        <div className="main">    
            <div className="left">
            <h1 className="titleone">Track</h1>
             <h1 className="titleone">Crypto</h1>
            <h1 className="titletwo">Real Time.</h1>
            <p class="para">Track crypto through a public api in real time. Visit the dashboard to do so!</p>
            <Footer/>
            </div>

            <div className="right">
            <motion.img src={phone} alt="phone" className="phone" initial={{y:-20}} animate={{y:20}} 
            transition={{
                type:"smooth",
                repeatType:"mirror",
                duration:2,  
                repeat:Infinity,
            }}/>
            <img src={gre} alt="gra" className="gre"/>
            </div>
        </div>
    )
}

export default Main;                                        