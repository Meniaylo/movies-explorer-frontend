import './BurgerMenu.css';
import { NavLink } from 'react-router-dom';


function BurgerMenu ({ isMenuOpened }) {


  return (
    <section className={`burger-menu ${isMenuOpened && 'burger-menu__active'}`}>
      <div className='burger-menu__container'>
        <div className='burger-menu__info-wrap'>
          <NavLink to='/' className='burger-menu__link link'>Главная</NavLink>

          <NavLink to='/movies' className='burger-menu__link link'>Фильмы</NavLink>

          <NavLink to='/saved-Movies' className='burger-menu__link link'>Сохранённые фильмы</NavLink>
        </div>

        <NavLink className='link' to='/profile'>
          <figure className='burger-menu__account-link'>
            <figcaption className='burger-menu__figcaption'>Аккаунт</figcaption>
            <button className='burger-menu__account-icon' type='button'></button>
          </figure>
        </NavLink>
      </div>
    </section>
  );
};

export default BurgerMenu;