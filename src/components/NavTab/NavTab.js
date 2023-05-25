import React from 'react';
import './NavTab.css';

function NavTab () {

  const anchors = document.querySelectorAll('a.nav__link');

  anchors.forEach((anchor) => {
    const blockID = anchor.getAttribute('href');

    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  });

  return (
    <section className='nav' aria-label='site-navigation'>
      <nav>
        <ul className='nav__links'>
          <li><a href='#about-project' className='nav__link link'>О проекте</a></li>
          <li><a href='#techs' className='nav__link link'>Технологии</a></li>
          <li><a href='#student' className='nav__link link'>Студент</a></li>
        </ul>
      </nav>
    </section>
  );
};

export default NavTab;