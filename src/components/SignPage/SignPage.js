import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SignPage.css';
import logo from '../../images/logo.svg';
import Input from '../Input/Input';
import SubmitButton from '../SubmitButton/SubmitButton';

function SignPage ({ title, submitText, questionText, linkText, linkAddress }) {

  const location = useLocation();

  return (
    <section className='sign-page'>

      <Link to='/' className='link'>
        <img className='sign-page__logo' src={logo} alt='Логотип'/>
      </Link>

      <h2 className='sign-page__title'>{title}</h2>

      <form className='sign-form'>
        <div className={`sign-form__container ${(location.pathname === '/signin') && 'sign-form__container_login'}`}>

          {location.pathname === '/signup' && (
            <>
              <label className='sign-form__label' htmlFor='username'>Имя</label>
              <Input
                type='text'
                name='username'
                placeholder=''
              />

              {/* <span className="sign-form__error"></span> */}
            </>
          )}

          <label className='sign-form__label' htmlFor='email'>E-mail</label>
          <Input
            type='email'
            name='email'
            placeholder=''
          />

          <label className='sign-form__label' htmlFor='password'>Пароль</label>
          <Input
            type='password'
            name='password'
            placeholder=''
          />
        </div>

        <SubmitButton
          text={submitText}
          />

      </form>

      <div className='sign-page__redirect-container'>
        <p className='sign-page__redirect-text'>{questionText}</p>
        <Link to={linkAddress} className='sign-page__redirect-text sign-page__redirect-text_link link'>
          {linkText}
        </Link>
      </div>
    </section>
  );
};

export default SignPage;