
import React from 'react';
import './form-input.scss'

const FormInput =({handleChange, label, ...orthers }) => {
  return (
    <div className='group'> 
      <input className='form-input' onChange={handleChange} {...orthers}/>
      {
        label ?
        (
          <label className={`${orthers.value.length ? 'shrink': ''} form-input-label`} >
            {label}
          </label>
        ): null
      }
    </div>
    
  );
}

export default FormInput;