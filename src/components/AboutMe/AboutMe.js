import './AboutMe.css';
import myPic from '../../images/my-photo.JPG';

function AboutMe () {

  return (
    <section className='section about-me' id='student'>
      <h2 className='section__title'>Студент</h2>

      <div className='about-me__container'>

        <div>
          <h3 className='about-me__name'>Татьяна Меняйло</h3>
          <p className='about-me__info'>Фронтенд-разработчик, 38 лет</p>
          <p className='about-me__description'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className='about-me__repository-link link' href='https://github.com/Meniaylo/'>Github</a>
        </div>

        <img className='about-me__pic' src={myPic} alt='Герой лицом' />
      </div>
    </section>
  );
};

export default AboutMe;