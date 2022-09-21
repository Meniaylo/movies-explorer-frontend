import './Portfolio.css';

function Portfolio () {

  return (
    <section className='section portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>

      <ul className='portfolio__links'>

            <li className='portfolio__item'>
              <a className='portfolio__link' href='https://github.com/Meniaylo/how-to-learn/' target='blank' rel='noreferrer'>
                <p className='portfolio__link-text link'>Статичный сайт</p>
                <span className='link'>&#8599;</span>
              </a>
            </li>

            <li className='portfolio__item'>
              <a className='portfolio__link' href='https://meniaylo.github.io/russian-travel/index.html' target='blank' rel='noreferrer'>
                <p className='portfolio__link-text link'>Адаптивный сайт</p>
                <span className='link'>&#8599;</span>
              </a>
            </li>

            <li className='portfolio__item'>
              <a className='portfolio__link' href='http://meniaylo.nomoredomains.sbs/' target='blank' rel='noreferrer'>
                <p className='portfolio__link-text link'>Одностраничное приложение</p>
                <span className='link'>&#8599;</span>
              </a>
            </li>
          </ul>

    </section>
  );
};

export default Portfolio;