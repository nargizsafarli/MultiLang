
import React from 'react';
import logoFooter from "./assets/logo-white.png";
import { IoLocationOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { BsFillTelephoneFill } from "react-icons/bs";
import insImg1 from "./assets/1.png";
import insImg2 from "./assets/2.png";
import insImg3 from "./assets/3.png";
import insImg4 from "./assets/5.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./Footer.css";
import { useTranslation } from 'react-i18next';

function Footer() {
  const {t}=useTranslation()
  return (
    <div className='footer-container'>
      <div className='footer-item'>
        <img className='logo-img' src={logoFooter} alt="Cafeu Logo" />
        <p>{t("footer.sec1")}</p>
        <div className='loc'>
          <IoLocationOutline />
          <div className='loc-item'>
            <span>4920 Trails End Road Ft United States, FL 33311</span>
          </div>
        </div>
        <div className='loc'>
          <TiMessages />
          <div className='loc-item'>
            <span>nfo@example.com</span>
            <span>test@example.com</span>
          </div>
        </div>
        <div className='loc'>
          <BsFillTelephoneFill />
          <div className='loc-item'>
            <span>+123 456 679 123</span>
            <span>+123 456 789</span>
          </div>
        </div>
      </div>

      {/* Quick links */}
      <div className='footer-item'>
        <h3 className='footer-title'>{t("footer.sec2Header")}</h3>
        <div className='footer-body'>
          <p>{t("footer.sec2.1")}</p>
          <p>{t("footer.sec2.2")}</p>
          <p>{t("footer.sec2.3")}</p>
          <p>{t("footer.sec2.4")}</p>
          <p>{t("footer.sec2.5")}</p>
          <p>{t("footer.sec2.6")}</p>
          <p> {t("footer.sec2.7")}</p>
        </div>
      </div>

      {/* Instagram images */}
      <div className='footer-item'>
        <h3 className='footer-title'>Instagram</h3>
        <div className='footer-body-img'>
          <img src={insImg1} />
          <img src={insImg2} />
          <img src={insImg3} />
          <img src={insImg4} />
          <img src={insImg2} />
          <img src={insImg3} />
        </div>
      </div>

      {/* Subscribe bölməsi */}
      <div className='footer-item'>
        <h3 className='footer-title'>{t("footer.sec4Header")}</h3>
        <p>{t("footer.sec4")}</p>
        <div className='footer-icons'>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
