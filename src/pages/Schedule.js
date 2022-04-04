import React from "react";
import Navbar from '../components/Navbar';
import MoreInfo from '../components/MoreInfo';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Schedule = () => {

  return(
    <div className="container" style={{position: 'relative'}}>
      <Navbar />
      <Header title="Conference Schedule" caption='April 9  ~ April 10' />
      
      <MoreInfo />
      <Footer />
    </div>
  );
};

export default Schedule;