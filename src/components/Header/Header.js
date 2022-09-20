import React, { useState } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Header ({ isLoggedIn }) {

  const location = useLocation();
  // const [isMenuOpened, setIsMenuOpened] = useState(false);

  // const toggleMenu = () => {
  //   !isMenuOpened ? setIsMenuOpened(true) : setIsMenuOpened(false);
  // }

  // const handleSignIn = (e) => {
  //   e.preventDefault();
  // }

  return (
    <header className={`header ${(location.pathname === '/') && 'header_absolute'}`}>
      <Link to='/' className='link'>
        <img className='header__logo' src={logo} alt='Логотип'/>
      </Link>

      <div className='header__container'>

      {location.pathname === '/' && (
        <>
          <Link className='header__item link' to='/signup'>Регистрация</Link>
          <Link className='header__button link' to='/signin'>Войти</Link>
        </>
      )}

      {isLoggedIn && (
        <>
          <Link className='header__item header__item_signed-in link' to='/movies'>Фильмы</Link>
          <Link className='header__item header__item_signed-in link' to='/saved-movies'>Сохранённые фильмы</Link>
          <Link className='header__item header__item_signed-in link' to='/profile'>
            <figure className='header__account-link'>
              <figcaption className='header__figcaption'>Аккаунт</figcaption>
              <button className='header__account-icon'></button>
            </figure>
          </Link>
        </>
      )}

      </div>
    </header>
  );
};

export default Header;