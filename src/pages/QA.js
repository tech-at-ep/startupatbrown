import React from "react";
import Navbar from '../components/Navbar';
import MoreInfo from '../components/MoreInfo';
import Footer from '../components/Footer';
import Header from '../components/Header';
import qrCode from '../images/qrCode.png';

const QA = () => {

  return(
    <div className="container" style={{position: 'relative'}}>
      <Navbar />
      <Header title='Q&A' caption='Look at our Frequently Asked Questions!' /> 
      <div className="faq">
        <div className="qa">
          <p className="question">Who can attend Startup@Brown?</p>
          <p className="answer">All Brown and RISD undergraduate, graduate students, and alumni are welcome! If you're not associated with Brown or RISD, still register and we'll do our best to make sure you get a spot!</p>
        </div>
        <div className="qa">
          <p className="question">Why Startup@Brown?</p>
          <p className="answer">As students, while we get a lot of exposure to larger companies, we don’t often hear about the exciting work startups do and the challenges they face. At Startup@Brown, you’ll get the chance to talk in small groups with founders, engineering leads, and venture capitalists. Come to learn about startups and their stories. Leave with a new perspective and your next summer internship or full-time job.</p>
        </div>
        <div className="qa">
          <p className="question">What will the event be like?</p>
          <p className="answer">Startup@Brown is a day-long event where you’ll have the chance to interact closely with startup founders, many of them alumni.<br /><br />The event will focus on small-group conversations and workshops on topics from “What is Product Management” to “Exploring Accelerators.” Meet with engineers and designers, discuss the technical problems they’re trying to solve, and maybe they'll interest you enough for an internship or job :)</p>
        </div>
        <div className="qa">
          <p className="question">How do I apply?</p>
          <p className="answer">Register for Startup@Brown 2022 here!</p>
        </div>
        <div className="qa">
          <p className="question">When will I find out if I’m accepted?</p>
          <p className="answer">We would love if everyone could attend, but in past years we've received more interest than available. Please apply early to reserve your spot!</p>
        </div>
      </div>
      <div className="registerNow">
        <div className="registerText">
          <p className="registerText1">Register Now!</p>
          <p className="registerText2">Meet amazing startups and find your <br />next internship or full-time job</p>
          <div className="applyButton" style={{marginTop: '30px'}}>
            <p className='applyButtonText'>Apply Now</p>
          </div>
        </div>
        <img src={qrCode} className="qrCode"></img>
      </div>
      <MoreInfo />
      <Footer />
    </div>
  );
};

export default QA;