import { useState } from "react";

import './FilterCheckbox.css';

function FilterCheckbox () {

  const [isShortFilm, setIsShortFilm] = useState(false);

  const handleCheckBoxChange = () => {
    !isShortFilm ? setIsShortFilm(true) : setIsShortFilm(false);
  };

  return (
    <figure className='checkbox'>
      <input
        type='checkbox'
        className={`checkbox__switcher ${!isShortFilm && 'checkbox__switcher_checked'}`}
        onChange={handleCheckBoxChange}
      />
      <figcaption className='checkbox__caption'>Короткометражки</figcaption>
    </figure>
  );
};

export default FilterCheckbox;