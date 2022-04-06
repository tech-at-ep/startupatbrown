import React from "react";
import Navbar from '../components/Navbar';
import MoreInfo from '../components/MoreInfo';
import Footer from '../components/Footer';
import Header from '../components/Header';
import qrCode from "../images/image21.png";
import applyImage from "../images/image23.png";

const Competition = () => {

  return(
    <div className="container" style={{position: 'relative'}}>
      <Navbar />
      <Header title='Pitch Competition' caption='Enter with your Pitch for a chance of $1,250!' />
      <div className="infoBoxes">
        <div className="infoDate">
          <p className="infoBoxHeader">Date</p>
          <div className="infoBox">
            <p className="infoBoxText">
              Saturday,<br />April 9
            </p>
          </div>
        </div>
        <div className="infoTime">
          <p className="infoBoxHeader">Time</p>
          <div className="infoBox">
            <p className="infoBoxText">
              4:15 - 6:30 PM
            </p>
          </div>
        </div>
        <div className="infoLocation">
          <p className="infoBoxHeader">Location</p>
          <div className="infoBox">
            <p className="infoBoxText">
              Sayles Auditorium
            </p>
          </div>
        </div>
      </div>
      <div className='landingInfo'>
        <p className='info1' style={{size: '49px'}}>Come join the Pitch Competiton!</p>
        <p className='info2' style={{inlineSize:'980px', margin: 'auto', size: '25px', fontWeight: '600'}}>Take your startups to the next level by pitching your company or idea to industry experts and experienced founders! Get feedback from our guests judges and come prepared to receive offers from our venture capital firm representative.</p>
        <div className='blob'>
            <div className='blobL'>
            <p className='blobNumber'>3</p>
            <p className='blobText'>Judges</p>
            </div>
            <div className='vertical-row'></div>
            <div className='blobM'>
            <p className='blobNumber'>1</p>
            <p className='blobText'>VC Firm</p>
            </div>
            <div className='vertical-row'></div>
            <div className='blobR'>
            <p className='blobNumber'>$1,250</p>
            <p className='blobText'>Total prize for the Pitch Competition</p>
            </div>
        </div>
      </div>
      <div className='pitchApply'>
        <img className='pitchImage' src={applyImage}></img>
        <div className='qrText' style={{margin: 'auto'}}>
          <p className='qrText2' style={{fontSize: '55px', fontWeight: '800', textAlign: 'center', lineHeight: '70px', inlineSize:'800px', paddingTop:'0px'}}>Enter our Pitch Competition and get a chance to win $1,000+ prizes!</p>
          <p className='weatherCaution' style={{textAlign: 'center', marginRight: 'auto'}}>*Must have at least one female-identifying founder</p>
        </div>
      </div>
      <div className='pitchQrCode'>
        <img className='qrCode2' src={qrCode}></img>
        <div className='qrText' style={{marginBottom: '25px', marginRight: '30px'}}>
          <p className='qrText1' style={{fontSize: '81px', marginTop: '35px'}}>APPLY NOW</p>
          <p className='qrText2' style={{fontSize: '22px', marginBottom: '30px'}}>for our Pitch Competition and get a chance to<br /> win $1,000+ prizes!</p>
          <div className="applyButton" style={{width: '176.64px', height: '63.76px'}}>
            <p className='applyButtonText'>Apply Now</p>
          </div>
          <p className='weatherCaution' style={{marginRight: '0px', marginBottom: '0px', fontSize: '19px', opacity: '1'}}>*Application due 4/1/22</p>
        </div>
      </div>
      <MoreInfo />
      <Footer />
    </div>
  );
};

export default Competition;