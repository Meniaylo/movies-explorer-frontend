import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies () {

  return (
    <section className='movies'>
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList isThisSavedList={true} />

      <button className='movies__load-more-btn link'>Ещё</button>

    </section>
  );
};

export default SavedMovies;