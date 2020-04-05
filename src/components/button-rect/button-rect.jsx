import React from 'react';
import './button-rect.scss'

const ButtonRect = ({btnLabel, isGoogleSignIn, inverted, ...orthers}) => {
  return (
    <button 
      className={ 
        `${isGoogleSignIn? 'google-sign-in': ''} button-rect`
      } 
      {...orthers}>
      {btnLabel}
    </button>
  );
}

export default ButtonRect;