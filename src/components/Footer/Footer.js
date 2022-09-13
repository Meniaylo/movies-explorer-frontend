import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</div>
      <div className="footer__info">
        <p className="footer__copyright">&copy; 2022</p>
        <nav>
        <ul class="footer__links">
          <li><a href="https://practicum.yandex.ru/" class="link footer__link link">Яндекс.Практикум</a></li>
          <li><a href="https://github.com/" class="link footer__link link">Github</a></li>
        </ul>
        </nav>
      </div>
  </footer>
);

export default Footer;