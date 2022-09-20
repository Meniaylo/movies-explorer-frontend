import './Footer.css';

function Footer () {


  return (
    <footer className="footer">
      <h2 className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</h2>

      <div className="footer__info">
        <p className="footer__copyright">&copy; 2022</p>
        <ul className="footer__links">
          <li>
            <a
              href="https://practicum.yandex.ru/"
              className='footer__link link'
              target='blank'
              rel='noreferrer'>Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              href="https://github.com/"
              className='footer__link link'
              target='blank'
              rel='noreferrer'>Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;