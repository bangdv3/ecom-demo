import React from 'react';
import './menu-item.scss'

const MenuItem = ({title, imgUrl, size}) =>(
  <div className = {`${size} menu-item`} >
    <div className='background-image' style={{backgroundImage: `url(${imgUrl})`}}/>
    <div className = "content" >
      <div className = "menu-item-name">{title.toUpperCase()}</div>
      <span className = "add-cart">SHOP NOW</span>
    </div> 
  </div>
);

export default MenuItem;