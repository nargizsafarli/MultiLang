import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "./assets/logo.png"
import logo2 from "./assets/call.png"
import "./Navbar.css"
import i18next from 'i18next'
import { Select, Space } from 'antd';
import { useTranslation } from 'react-i18next'

function Navbar() {
  const {t}=useTranslation()
  const handleChange = value => {
    i18next.changeLanguage(value)
  };
  return (
    <div className='nav-container'>
    <img src={logo}/>
    <div className='nav-link'>
       <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>{t("navbar.home")}</NavLink>
        <NavLink to="/menu" className={({ isActive }) => isActive ? "active-link" : ""}>{t("navbar.menu")}</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>{t("navbar.about")}</NavLink>
        </div>
        <div className='nav-contact'>
            <img src={logo2}/>
            <span>+880 123 456 859</span>
        </div>
        <div className='changeLang'>
        <Select
      // defaultValue="az",
      value={i18next.language}
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'az', label: 'Aze' },
        { value: 'en', label: 'Eng' },
      ]}
    />
        </div>
    </div>
  )
}

export default Navbar