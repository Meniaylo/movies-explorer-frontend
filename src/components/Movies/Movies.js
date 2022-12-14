import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies () {

  return (
    <section className='movies'>
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList isThisSavedList={false} />

      <button className='movies__load-more-btn link' type='button'>Ещё</button>

    </section>
  );
};

export default Movies;