import React, { useState, useEffect } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Input from '../Input/Input';
import SubmitButton from '../SubmitButton/SubmitButton';

function SearchForm () {

  const [keyword, setKeyword] = useState('');
  const [error, setError] = useState(false);
  const [isShortMovies, setIsShortMovies] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    console.log("Hello my darling me! Everything's gonna be allright :)");

    if (!keyword) {
      setError(true);
    } else {
      setError(false);
    }
  }

  const handleCheckBoxChange = (e) => {
    setIsShortMovies(e.target.checked);
    console.log(isShortMovies);
  }

  return (
    <section className='search' aria-label='movies-search'>

      <form
        className='search-form'
        onSubmit={handleSearchSubmit}
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
            {error ? 'Нужно ввести ключевое слово' : ''}
          </span>

        </div>

        <FilterCheckbox
          isShortMovies={isShortMovies}
          handleCheckBoxChange={handleCheckBoxChange}
        />

      </form>

    </section>
  );
};

export default SearchForm;