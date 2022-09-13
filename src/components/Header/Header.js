import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';


const Header = () => (
  <header className="header">
    <Link to='/' className="link">
      <img className="header__logo" src={logo} alt="Логотип"/>
    </Link>
    <div className='header__authorization'>
      <p className='header__registration'>Регистрация</p>
      <button className='header__button link'>Войти</button>
    </div>
  </header>
);

export default Header;