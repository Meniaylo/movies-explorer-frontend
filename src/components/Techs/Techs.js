import './Techs.css';

function Techs () {

  return(
    <section className='section techs' id='techs'>
      <h2 className='section__title'>Технологии</h2>

      <h3 className='techs__title'>7 технологий</h3>
      <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

      <ul className='techs__items'>
        <li className='techs__item link'>HTML</li>
        <li className='techs__item link'>CSS</li>
        <li className='techs__item link'>JS</li>
        <li className='techs__item link'>React</li>
        <li className='techs__item link'>Git</li>
        <li className='techs__item link'>Express.js</li>
        <li className='techs__item link'>MongoDB</li>
      </ul>

    </section>
  );
};

export default Techs;