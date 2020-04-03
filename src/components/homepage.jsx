import React from 'react';
import './homepage.scss'

const HomePage = (props) => {
  return(
    <div className="homepage">
      <div className="directory-menu">
      <div className = "menu-item">
          <div className = "content">
            <div className = "menu-item-name">Hat</div>
            <span className = "add-cart">SHOP NOW</span>
          </div> 
        </div>
        <div className = "menu-item">
          <div className = "content">
            <div className = "menu-item-name">Jacket</div>
            <span className = "add-cart">SHOP NOW</span>
          </div> 
        </div>
        <div className = "menu-item">
          <div className = "content">
            <div className = "menu-item-name">Men</div>
            <span className = "add-cart">SHOP NOW</span>
          </div> 
        </div>
        <div className = "menu-item">
          <div className = "content">
            <div className = "menu-item-name">Men</div>
            <span className = "add-cart">SHOP NOW</span>
          </div> 
        </div>
        <div className = "menu-item">
          <div className = "content">
            <div className = "menu-item-name">Women</div>
            <span className = "add-cart">SHOP NOW</span>
          </div> 
        </div>
      </div>

    </div>
   
  )
}

export default HomePage