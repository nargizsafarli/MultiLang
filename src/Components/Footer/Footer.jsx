import React from 'react'
import logoFooter from "./assets/logo-white.png"
import { IoLocationOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { BsFillTelephoneFill } from "react-icons/bs";
import insImg1 from "./assets/1.png";
import insImg2 from "./assets/2.png"
import insImg3 from "./assets/3.png"
import insImg4 from "./assets/5.png"

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-item'>
          <img src={logoFooter}/>
          <p>hhhhs</p>
          <div className='loc'>
          <IoLocationOutline />
          <div className='loc-item'>
           <span>
           4920 Trails End Road Ft United States, FL 33311
           </span>
          </div>
          </div>
          <div className='loc'>
          <TiMessages />
          <div className='loc-item'>
           <span>
           nfo@example.com
           </span>
           <span>
           test@example.com
           </span>

          
          </div>
          </div>
          <div className='loc'>
          <BsFillTelephoneFill />
          <div className='loc-item'>
           <span>+123 566 899</span>
           <span>+992 746 122</span>
          </div>
        </div>
      </div>
      <div className='footer-item'>
      <h1>Quick links</h1>
      <div className='footer-body'>
        <h3>   hhhs </h3>
        <h3>   hhhs </h3>
        <h3>   hhhs </h3>
        value  <h3>   hhhs </h3>
        <h3>   hhhs </h3>
        <h3>   hhhs </h3>
        </div>
      </div>
      <div className='footer-item'>
       <img src={insImg1} style={{width:"100px",height:"100px"}}/>
       <img src={insImg2} style={{width:"100px",height:"100px"}}/>
       <img src={insImg3} style={{width:"100px",height:"100px"}}/>
       <img src={insImg4} style={{width:"100px",height:"100px"}}/>
      </div>
    </div>
  )
}

export default Footer