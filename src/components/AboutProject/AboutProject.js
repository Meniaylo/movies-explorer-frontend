import './AboutProject.css';

function AboutProject () {

  return (
    <section className='section about-project' id='about-project'>
      <h2 className='section__title'>О проекте</h2>

      <ul className='about-project__stages'>
        <li className='about-project__stages-column'>
          <h3 className='about-project__column-title'>Дипломный проект включал 5&nbsp;этапов</h3>
          <p className='about-project__column-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
        </li>
        <li className='about-project__stages-column'>
          <h3 className='about-project__column-title'>На&nbsp;выполнение диплома ушло 5&nbsp;недель</h3>
          <p className='about-project__column-text'>У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>

      <ul className='about-project__deadlines'>
        <li className='about-project__short-stage'>
          <h3 className='about-project__term about-project__term_short'>1&nbsp;неделя</h3>
          <p className='about-project__topic about-project__topic_short'>Back-end</p>
        </li>
        <li className='about-project__long-stage'>
          <h3 className='about-project__term about-project__term_long'>4&nbsp;недели</h3>
          <p className='about-project__topic about-project__topic_long'>Front-end</p>
        </li>
      </ul>

    </section>
  );
};

export default AboutProject;