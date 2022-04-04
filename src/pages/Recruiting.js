import React from "react";
import Navbar from '../components/Navbar';
import MoreInfo from '../components/MoreInfo';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Recruiting = () => {

  return(
    <div className="container" style={{position: 'relative'}}>
      <Navbar />
      <Header title='Recruiting Fair' caption="We'll have companies sponsoring a Recruiting Fair!" />
      
      <MoreInfo />
      <Footer />
    </div>
  );
};

export default Recruiting;