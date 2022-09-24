import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies () {

  return (
    <section className='saved-movies'>
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList isThisSavedList={true} />

      <button className='saved-movies__load-more-btn link' type='button'>Ещё</button>

    </section>
  );
};

export default SavedMovies;