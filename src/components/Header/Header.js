import React, { useState, useEffect } from 'react';
import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header ({ isLoggedIn }) {

  const location = useLocation();
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    setIsMenuOpened(false);
  }, [location.pathname])

  const toggleMenu = () => {
    !isMenuOpened ? setIsMenuOpened(true) : setIsMenuOpened(false);
  }

  return (
    <header className={`header ${(location.pathname === '/') && 'header_main-blue'}`}>

      <NavLink to='/' className='link'>
        <img className='header__logo' src={logo} alt='Логотип'/>
      </NavLink>

      <div className={`header__container`}>

      {location.pathname === '/' && !isLoggedIn && (
        <>
          <NavLink className='header__item link' to='/signup'>Регистрация</NavLink>
          <NavLink className='header__button link' to='/signin'>Войти</NavLink>
        </>
      )}

      {isLoggedIn && (
        <>
          <NavLink className='header__item header__item_signed-in link' to='/movies'>Фильмы</NavLink>
          <NavLink className='header__item header__item_signed-in link' to='/saved-movies'>Сохранённые фильмы</NavLink>
          <NavLink className='header__item header__item_signed-in link' to='/profile'>
            <figure className='header__account-link'>
              <figcaption className='header__figcaption'>Аккаунт</figcaption>
              <button className='header__account-icon'></button>
            </figure>
          </NavLink>
        </>
      )}

      {!(location.pathname === '/') && (
        <>
          <div
          className={`header__burger link ${isMenuOpened && 'header__burger_close-btn'}`}
          onClick={toggleMenu}
          >
            <span className="header__burger-span"></span>
          </div>

          <BurgerMenu isMenuOpened={isMenuOpened}/>
        </>

      )}

      </div>
    </header>
  );
};

export default Header;