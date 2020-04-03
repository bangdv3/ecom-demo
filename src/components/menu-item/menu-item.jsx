import React from 'react';
import './menu-item.scss';
import {withRouter} from 'react-router-dom';


const MenuItem = ({title, imgUrl, size, linkUrl, history, match}) =>(
  <div className = {`${size} menu-item`} 
    onClick = {()=>history.push(`${match.url}${linkUrl}`)} >
    <div className='background-image' style={{backgroundImage: `url(${imgUrl})`}}/>
    <div className = "content" >
      <div className = "menu-item-name">{title.toUpperCase()}</div>
      <span className = "add-cart">SHOP NOW</span>
    </div> 
  </div>
);

export default withRouter(MenuItem);