import React from "react";
import './Main.css';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NAvTab';
// import AboutProject from '../AboutProject';
// import Techs from '../Techs/Techs';
// import AboutMe from '../AboutMe/AboutMe';

const Main = () => {
  return (
    <section className='main'>
      <Promo />
      <NavTab />
      {/* <AboutProject />
      <Techs />
      <AboutMe /> */}
    </section>
  )
}

export default Main;