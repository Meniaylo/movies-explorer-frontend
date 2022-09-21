import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Input from '../Input/Input';
import SubmitButton from '../SubmitButton/SubmitButton';

function SearchForm () {

  return (
    <section className='search' aria-label='movies-search'>

      <form
        className='search-form'
        noValidate
      >

        <div className='search-form__container' >

          <Input
            type='text'
            name='movie-request'
            placeholder='Фильм'
          />

          <SubmitButton
            text='Найти'
          />

          <span className='search-form__error'>
          </span>

        </div>

        <FilterCheckbox />

      </form>

    </section>
  );
};

export default SearchForm;