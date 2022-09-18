import React from 'react';
import './Register.css';
import SignPage from '../SignPage/SignPage';

function Register () {

  return (
      <SignPage
        title='Добро пожаловать!'
        submitText='Зарегистрироваться'
        questionText='Уже зарегистрированы?'
        linkText='Войти'
      />
  );
};

export default Register;