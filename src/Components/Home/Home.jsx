import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./assets/baner.png";
import img2 from "./assets/baner1.png";
import img3 from "./assets/first-slider.png";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <div className="slide-content">
            <div className="slider-left">
              <p>{t("home.best")}</p>
              <h3>{t("home.inf")}</h3>
              <span>{t("home.inf2")}</span>
              <button
                onClick={() => {
                  navigate("/menu");
                }}
                className="order-now"
              >
                {t("home.orderBtn")}
              </button>
            </div>
            <img src={img1} />
          </div>
        </div>

        <div className="slide">
          <div className="slide-content">
            <div className="slider-left">
            <p>{t("home.best")}</p>
            <h3>{t("home.inf")}</h3>
            <span>{t("home.inf2")}</span>
              <button
                onClick={() => {
                  navigate("/menu");
                }}
                className="order-now"
              >
                {t("home.orderBtn")}
              </button>
            </div>
            <img src={img2} />
          </div>
        </div>
        <div className="slide">
          <div className="slide-content">
            <div className="slider-left">
            <p>{t("home.best")}</p>
            <h3>{t("home.inf")}</h3>
            <span>{t("home.inf2")}</span>
              <button
                onClick={() => {
                  navigate("/menu");
                }}
                className="order-now"
              >
                {t("home.orderBtn")}
              </button>
            </div>
            <img src={img3} />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Home;
