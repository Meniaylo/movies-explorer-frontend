import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm () {

  return (
    <section className='search' aria-label='movies-search'>

      <form
        className='search-form'
        noValidate
      >

        <div className='search-form__container' >

          <input
            className='search-form__input'
            type='text'
            name='movie-request'
            value={'' || ''}
            placeholder='Фильм'
            autofocus
            required
          />

          <button
            className='search-form__submit-btn link'
            type='submit'
          >Найти
          </button>

          <span className='search-form__error'>
          </span>

        </div>

        <FilterCheckbox />

      </form>

    </section>
  );
};

export default SearchForm;