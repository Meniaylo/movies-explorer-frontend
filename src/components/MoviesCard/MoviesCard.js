import { useState } from "react";
import './MoviesCard.css';
import testingCard from '../../utils/constants';

function MoviesCard () {

  const [isMovieSaved, setIsMovieSaved] = useState(false);

  const handleMovieSave = () => {
    !isMovieSaved ? setIsMovieSaved(true) : setIsMovieSaved(false);
  }

  return (
    <article className='movie-card'>
      <div className='movie-card__info'>
        <div>
          <h3 className='movie-card__title'>Отважный маленький тостер</h3>
          <p className='movie-card__film-length'>{testingCard.length}</p>
        </div>

        <button className={`movie-card__button ${isMovieSaved && 'movie-card__button_active'} link`} onClick={handleMovieSave}></button>
      </div>

      <a href={testingCard.link} target='blank' rel='noopener noreferrer' title='Посмотреть трейлер фильма'>
        <img className='movie-card__img' src={testingCard.link} alt='Обложка фильма' />
      </a>
    </article>
  );
};

export default MoviesCard;