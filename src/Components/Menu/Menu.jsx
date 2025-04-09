import React, { useEffect } from 'react'
import menuData from '../Data/Data'
import "./Menu.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";

function Menu() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // aktiv dili alırıq (az və ya en)
  const currentLang = i18n.language;

  return (
    <div className='menu-container'>
      {menuData.map((item, index) => (
        <div key={index} className='menu-card' data-aos="fade-up">
          <div className='card-img'>
            <img
              src={item.img}
              alt={item[`name${currentLang === "az" ? "Az" : "Eng"}`]}
            />
            <div className="delivery-badge">
              {t("menu.delivery")}: {item.deliveryPrice} {currentLang === "az" ? "AZN" : "$"}
            </div>
          </div>
          <div className='card-inf'>
            <h3>{item[`name${currentLang === "az" ? "Az" : "Eng"}`]}</h3>
            <p>{item[`ingredients${currentLang === "az" ? "Az" : "Eng"}`]}</p>
            <span className='price'>
              {t("menu.price")}: {item.price} {currentLang === "az" ? "AZN" : "$"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
