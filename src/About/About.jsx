import React, { useEffect } from "react";
import "./About.css";
import infImg from "./assets/exparience.png";
import serviceLogo from "./assets/5 (1).png";
import  serviceLogo2 from "./assets/6 (1).png"
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    const {t}=useTranslation();
     useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <div className="about-container">
      <div className="about-img">
        <span>{t("about.backImg")}</span>
      </div>

      <div className="about-inf">
        <img className="about-inf-img" src={infImg} data-aos="fade-right"/>

        <div className="inf-right" data-aos="fade-left">
          <p>{t("about.aboutUs1")}</p>
          <h1>{t("about.aboutUs2")}</h1>
          <span>
          {t("about.aboutUs3")}
          </span>
          <div className="service">
            <div className="service-item">
              <img className="service-logo" src={serviceLogo}></img>
              <div className="service-right">
                <h3> {t("about.aboutUsBuffet")}</h3>
                <span>
                {t("about.buffetInf")}
                </span>
              </div>
            </div>
            <div className="service-item">
              <img className="service-logo" src={serviceLogo2}></img>
              <div className="service-right">
                <h3> {t("about.buffetInf2")}</h3>
                <span>
                {t("about.buffetInf2")}
                </span>
              </div>
            </div>
          </div>
          <button className="About-us">{t("about.aboutBtn")}</button>
        </div>
      </div>

      <div className="discover-more" data-aos="zoom-out">
         <p>{t("about.action")}</p>
         <h3>{t("about.hire")}</h3>
         <span>{t("about.calUs")}</span>
         <button className="dis-moreBtn">{t("about.discoverBtn")}</button>
      </div>
    </div>
  );
}

export default About;
