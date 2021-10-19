import React from 'react';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <Services></Services>
      <Doctors></Doctors>
      <Contact></Contact>
    </div>
  );
};

export default Home;
