import React from 'react';
import './Input.css';

function Input ({ type, name, placeholder }) {

  return (
    <input
      className='input'
      type={type}
      name={name}
      placeholder={placeholder}
      required
    />
  );
};

export default Input;