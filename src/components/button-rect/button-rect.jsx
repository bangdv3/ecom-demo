import React from 'react';
import './button-rect.scss'

const ButtonRect = ({btnLabel, ...orthers}) => {
  return (
    <button className='button-rect' {...orthers}>
      {btnLabel}
    </button>
  );
}

export default ButtonRect;