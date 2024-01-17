import './AboutMe.css';
import myPic from '../../images/student-photo.jpg';

function AboutMe () {

  return (
    <section className='section about-me' id='student'>
      <h2 className='section__title'>Студент</h2>

      <div className='about-me__container'>

        <div>
          <h3 className='about-me__name'>Татьяна Меняйло</h3>
          <p className='about-me__info'>Фронтенд-разработчик, 39&nbsp;лет</p>
          <p className='about-me__description'>
            Живу в Санкт-Петербурге, окончила факультет связей с общественностью РАНХиГС. Пришла в веб-разработку со стороны заказчика: раньше я создавала ТЗ, идеи, структуры сайтов, тексты, визуал. Поняла, что хочу создавать веб-продукты своими руками, непосредственно заниматься их красотой и функциональностью. А когда начала разбираться, просто полюбила :)
          </p>
          <a className='about-me__repository-link link' href='https://github.com/Meniaylo/'>Github</a>
        </div>

        <img className='about-me__pic' src={myPic} alt='Герой лицом' />
      </div>
    </section>
  );
};

export default AboutMe;