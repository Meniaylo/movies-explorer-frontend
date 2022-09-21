import React from 'react';
import SignPage from '../SignPage/SignPage';

function Login () {

  return (
      <SignPage
        title='Рады видеть!'
        submitText='Войти'
        questionText='Ещё не зарегистрированы?'
        linkText='Регистрация'
        linkAddress='/signup'
      />
  );
};

export default Login;