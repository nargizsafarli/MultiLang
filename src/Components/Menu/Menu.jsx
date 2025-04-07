import React, { useEffect } from 'react'
import menuData from '../Data/Data'
import "./Menu.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Menu() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <div className='menu-container' >
  {
    menuData.map((item,index)=>(
      <div key={index} className='menu-card' data-aos="fade-up">
       <div className='card-img'><img src={item.img}/></div> 
       <div>
        <h3>{item.nameAz}</h3>
          <p>{item.ingredientsAz}</p>
          <p>Qiymət: {item.price} AZN</p>
          <p>Çatdırılma: {item.deliveryPrice} AZN</p>
       </div>
      </div>
    ))
  }
    </div>
  )
}

export default Menu