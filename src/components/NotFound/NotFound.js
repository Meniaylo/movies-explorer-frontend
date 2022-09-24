import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';


function NotFound () {

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section className='not-found'>

      <p className='not-found__code'>404</p>

      <h2 className='not-found__title'>Страница не найдена</h2>

      <button className='not-found__goBack-btn link' type='button' onClick={goBack}>Назад</button>
    </section>
  );
};

export default NotFound;