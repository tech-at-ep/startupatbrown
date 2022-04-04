import React from "react";
import Navbar from '../components/Navbar';
import MoreInfo from '../components/MoreInfo';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Competition = () => {

  return(
    <div className="container" style={{position: 'relative'}}>
      <Navbar />
      <Header title='Pitch Competition' caption='Enter with your Pitch for a chance of $10,000!' />
      
      <MoreInfo />
      <Footer />
    </div>
  );
};

export default Competition;