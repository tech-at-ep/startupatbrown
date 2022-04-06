import React from "react";
import Navbar from '../components/Navbar';
import MoreInfo from '../components/MoreInfo';
import Footer from '../components/Footer';
import applyImage from "../images/image23.png";
// import '../index.css';

const sendRegister = (ev) => {
  ev.preventDefault();
  window.location.href='https://www.eventbrite.com/e/2022-brown-entrepreneurship-conference-tickets-295260390777';
  }

const sendPitchSignup = (ev) => {
  ev.preventDefault();
  window.location.href='https://docs.google.com/forms/d/e/1FAIpQLScL-OnzyviG8UAXzMmraHFdPK9aOq3AtKNQL_9mZ3wlqc7shA/viewform';
}

const sendPitch = (ev) => {
  ev.preventDefault();
  window.location.href='/competition';
  }

const LandingPage = () => {
  return(
          <div className="container" style={{position: 'relative'}}>
            <Navbar />
            <div className='landingHeader'>
              <p className='header1style'>Startup@Brown x Women Empowerment</p>
              <p className='header2style'>The Brown<br />Entrepreneurship<br />Conference</p>
              <p className='header3style'>Date: April 9-10, 2022 | Location: Main Green</p>
              <div className="headerButton" onClick={sendRegister}>
                <p className='headerButtonText'>REGISTER NOW</p>
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
              <div className='qrBox'>
                <img className='applyImage' src={applyImage}></img>
                <div className='qrText'>
                  <p className='qrText1'>APPLY NOW</p>
                  <p className='qrText2'>for our Pitch Competition and get a chance to win $1,000+ prizes!</p>
                  <div className="applyButtons">
                    <div className="applyButton" onClick={sendPitchSignup}>
                      <p className='applyButtonText'>Apply Now</p>
                    </div>
                    <div className="applyButton" style={{background: 'transparent', border: '3px solid #FFFFFF', borderRadius: '36px'}} onClick={sendPitch}>
                      <p className='applyButtonText' style={{color: 'white'}}>Learn More</p>
                    </div>
                  </div>
                  <p className='qrText3'>*Must have at least one female-identifying founder<br />*Application due 4/1/22</p>
                </div>
              </div>
            </div>
            <MoreInfo />
            <Footer />
          </div>
  );
}

export default LandingPage;