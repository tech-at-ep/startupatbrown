import React from "react";
import Navbar from '../components/Navbar';
import MoreInfo from '../components/MoreInfo';
import Footer from '../components/Footer';
import Header from '../components/Header';

const QA = () => {

  return(
    <div className="container" style={{position: 'relative'}}>
      <Navbar />
      <Header title='Q&A' caption='Look at our Frequently Asked Questions!' /> 
      
      <MoreInfo />
      <Footer />
    </div>
  );
};

export default QA;