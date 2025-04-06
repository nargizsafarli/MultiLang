import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./assets/baner.png";
import img2 from "./assets/baner1.png";
import img3 from "./assets/first-slider.png";
import "./Home.css";

function Home() {
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
              <h3>Best In Cafeu</h3>
              <p>slamssdjdjdjd</p>
            </div>
            <img src={img1} />
          </div>
        </div>

        <div className="slide">
          <div className="slide-content">
            <div className="slider-left">
              <h3>Salammm</h3>
              <p>Bu birinci slayddır.</p>
            </div>
            <img src={img2} />
          </div>
        </div>
        <div className="slide">
          <div className="slide-content">
            <div className="slider-left">
              <h3>Salammm</h3>
              <p>Bu birinci slayddır.</p>
            </div>
            <img src={img3} />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Home;
