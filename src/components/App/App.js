import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

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

        <Route path='/signup' element={
          <Register />
        }/>

        <Route path='/signin' element={
            <Login />
        }/>

        <Route path='/profile' element={
          <>
            <Header
              isLoggedIn={true}
            />
            <Profile />
          </>
        }/>

        <Route path='*' element={
            <NotFound />
        }/>

      </Routes>
    </div>
  );
}

export default App;
