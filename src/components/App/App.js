import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {

  return (
    <div className='root'>
      <Routes>
        <Route exact path='/' element={
          <>
            <Header
              isLoggedIn={false}
            />
            <Main />
            <Footer />
          </>
        }/>

        <Route path='/movies' element={
          <>
            <Header
              isLoggedIn={true}
            />
            <Movies />
            <Footer />
          </>
        }/>

        <Route path='/saved-movies' element={
          <>
            <Header
              isLoggedIn={true}
            />
            <SavedMovies />
            <Footer />
          </>
        }/>

      </Routes>
    </div>
  );
}

export default App;
