import React from 'react'
import menuData from '../Data/Data'

function Menu() {
  return (
    <div className='menu-container'>
  {
    menuData.map((item,index)=>(
      <div key={index}>
       <div><img src={item.img}/></div> 
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