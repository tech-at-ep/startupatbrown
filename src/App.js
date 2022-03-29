import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import qrCode from "./images/qrcode.png";
import backgroundImg from "./images/landingBackground.png";

function App() {
  
  return (
    <div className="container" style={{position: 'relative'}}>
      <Navbar />
      <div className='landingHeader'>
        <p className='header1style'>Startup@Brown x Women Empowerment</p>
        <p className='header2style'>The Brown<br />Entrepreneurship<br />Conference</p>
        <p className='header3style'>Date: April 9-10, 2022 | Location: Main Green</p>
        <div className="headerButton">
          <p className='headerButtonText'>Apply Now</p>
        </div>
      </div>
      <div className='landingInfo'>
        <p className='info1'>Connect and Work<br />with Innovative Startups</p>
        <p className='info2'>Come join us as Startup@Brown and Women Empowerment<br />from Brown Entrepreneurship Program hosts the BIGGEST<br />entrepreneurial event of the year</p>
        <div className='blob'>
            <div className='blobL'>
            <p className='blobNumber'>16</p>
            <p className='blobText'>Workshop Speakers</p>
            </div>
            <div className='vertical-row'></div>
            <div className='blobM'>
            <p className='blobNumber'>2</p>
            <p className='blobText'>Keynote Speakers</p>
            </div>
            <div className='vertical-row'></div>
            <div className='blobR'>
            <p className='blobNumber'>$1,250</p>
            <p className='blobText'>Total prize for the Pitch Competition</p>
            </div>
        </div>
      </div>
      <div className='apply'>
        <p className='applyHeader'>Application Deadline is 4/1!</p>
        <div className='qrBox'>
          <img className='qrCode' src={qrCode}></img>
          <div className='qrText'>
            <p className='qrText1'>APPLY NOW</p>
            <p className='qrText2'>To enter our Pitch Competition and get a chance to win $1,000+ prizes!</p>
            <p className='qrText3'>*Must have at least one female-identifying founder</p>
          </div>
        </div>
      </div>
      <div className='learnMore'>
        <p className='learnMoreText'>Want to Learn More?<br />Check out our other pages for more info</p>
        <div className='learnMoreButtonsGrid'>
          <div className='learnMoreButtonsColumn'>
            <div className='learnMoreButtonsRow'>
              <button className='learnMoreButton'>
                <p className='learnMoreButtonText'>Speakers</p>
              </button>
              <button className='learnMoreButton'>
                <p className='learnMoreButtonText'>Pitch Competition</p>
              </button>
              <button className='learnMoreButton'>
                <p className='learnMoreButtonText'>Recruiting Fair</p>
              </button>
            </div>
            <div className='learnMoreButtonsRow'>
              <button className='learnMoreButton'>
                <p className='learnMoreButtonText'>Companies Represented & Sponsors</p>
              </button>
              <button className='learnMoreButton'>
                <p className='learnMoreButtonText'>Other Events</p>
              </button>
              <button className='learnMoreButton'>
                <p className='learnMoreButtonText'>Q&A</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;