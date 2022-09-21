import React from 'react';
import SignPage from '../SignPage/SignPage';

function Register () {

  return (
      <SignPage
        title='Добро пожаловать!'
        submitText='Зарегистрироваться'
        questionText='Уже зарегистрированы?'
        linkText='Войти'
        linkAddress='/signin'
      />
  );
};

export default Register;