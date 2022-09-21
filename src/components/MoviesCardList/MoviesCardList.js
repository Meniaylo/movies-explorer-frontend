import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList ({ isThisSavedList }) {

  return (
    <section className='movies-list' aria-label='movies-list'>
      <MoviesCard isThisSavedList={isThisSavedList} />
      <MoviesCard isThisSavedList={isThisSavedList} />
      <MoviesCard isThisSavedList={isThisSavedList} />
      <MoviesCard isThisSavedList={isThisSavedList} />
      <MoviesCard isThisSavedList={isThisSavedList} />
      <MoviesCard isThisSavedList={isThisSavedList} />
      <MoviesCard isThisSavedList={isThisSavedList} />
      <MoviesCard isThisSavedList={isThisSavedList} />
      <MoviesCard isThisSavedList={isThisSavedList} />
    </section>
  );
};

export default MoviesCardList;