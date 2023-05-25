import React from 'react';
import './SubmitButton.css';

function SubmitButton ({ text }) {

  return (
    <button
      className='submit-btn link'
    >{text}
    </button>
  );
};

export default SubmitButton;