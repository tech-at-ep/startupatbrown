import React from "react";
import Navbar from '../components/Navbar';
import MoreInfo from '../components/MoreInfo';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SpeakerBox from '../components/SpeakerBox';
import Baumann from '../images/Will Baumann.jpeg';
import Perez from '../images/Valentin Perez.jpeg';
import Margulius from '../images/Quizlet.jpeg';
import Pointz from '../images/Maggie Bachenberg Pointz.jpeg';
import Qi from '../images/Christina Qi.jpeg';
import Kohler from '../images/Abbie Kohler ResusciTech.jpeg';
import Kraft from '../images/Daniel Kraft.jpeg';
import Cohart from '../images/Beren Rana Oz Cohart.jpeg';
import Xu from '../images/Julia L. Xu Multitasky.jpeg';
import Weitzman from '../images/Cliff Weitzman.jpeg';
import Altman from '../images/Miriam Altman Powerschool.jpeg';
import Pryor from '../images/Guayaki.jpeg';
import Moos from '../images/Kathryn Moos OWYN.webp';
import Rothburg from '../images/Alex Rothburg.jpeg';
import Jackson from '../images/Evan Jackson.jpeg';
import Kurup from '../images/Meera Kurup EmpowerU.jpeg';
import Schaeffer from '../images/Jack Schaeffer Eliza Sternlicht.jpeg';
import Kroll from '../images/download.jpeg';
import Tatiana from '../images/Tatiana.png';
import Jerry from '../images/Jerry Talton.png';
import Mary from '../images/Mary Lou Jepsen.png';
import Patty from '../images/Patty Hostin (1).png';
import Jennifer from '../images/Jennifer Nazareno.png';
import Banu from '../images/Banu Ozkazanc-pan.png';
import Elvia from '../images/elviaPerez.png'

const Speakers = () => {

  const membersArray = [
    {name: "Will Baumann", title: "Fourthwall", headshot: Baumann},
    {name: "Valentin Perez", title: "Monthly", headshot: Perez},
    {name: "Dave Margulius", title: "Quizlet", headshot: Margulius},
    {name: "Maggie Bachenberg", title: "Pointz", headshot: Pointz},
    {name: "Christina Qi", title: "Databento", headshot: Qi},
    {name: "Abbie Kohler", title: "ResusciTech", headshot: Kohler},
    {name: "Daniel Kraft", title: "Digital Health", headshot: Kraft},
    {name: "Beren Rana Oz", title: "Cohart", headshot: Cohart},
    {name: "Julia L. Xu", title: "Multitasky", headshot: Xu},
    {name: "Cliff Weitzman", title: "Speechify", headshot: Weitzman},
    {name: "Miriam Altman", title: "Powerschool", headshot: Altman},
    {name: "Alex Pryor", title: "Guayaki", headshot: Pryor},
    {name: "Kathryn Moos", title: "OWYN", headshot: Moos},
    {name: "Alex Rothburg", title: "Intus Care", headshot: Rothburg},
    {name: "Evan Jackson", title: "Intus Care", headshot: Jackson},
    {name: "Meera Kurup", title: "EmpowerU", headshot: Kurup},
    {name: "Jack Schaeffer Eliza Sternlicht", title: "Medi Circle", headshot: Schaeffer},
    {name: "Tatiana Mandis", title: "Cinemates", headshot: Tatiana},
    {name: "Jerry Talton", title: "Carta", headshot: Jerry},
    {name: "Patty Sweeny", title: "BlackRock", headshot: Patty},
    {name: "Mary Lou Jepsen", title: "Openwater", headshot: Mary},
    {name: "Elvia Perez", title: "Nelson Center for Entrepreneurship", headshot: Elvia},
    ]

  return(
    <div className="container parallax" style={{position: 'relative', background: 'url(images/speakersBackground.png) no-repeat center center'}}>
      <Navbar />
      <Header title='Speakers' caption='We’ll have a series of talks by trailblazing founders, entrepreneurs, and venture captialists' />
      <p className="info1" style={{margin: 'auto', textAlign: 'center', fontSize: '50px', marginBottom: '70px'}}>Keynote Speakers</p>
      <div className="keynoteSpeakers">
        <div className="speakersRow">
          <div className="KspeakerBox">
              <img className="speakerImage" src={Kroll}></img>

              <p className="speakerName">Charlie Kroll</p>
              <p className="speakerCompany">Lithic, fmr. Ellevest</p>
          </div>
          <div className="KspeakerBox">
              <img className="speakerImage" src={Jennifer}></img>

              <p className="speakerName">Jennifer Nazareno</p>
              <p className="speakerCompany">Barrett Hazeltine Professor of the Practice, Assistant Professor of Public Health & Entrepreneurship</p>
          </div>
          <div className="KspeakerBox"
          >
              <img className="speakerImage" src={Banu}></img>

              <p className="speakerName">Banu Ozkazanc-pan</p>
              <p className="speakerCompany">Professor of Practice, School of Engineering, & Director of the Venture Capital Inclusion Lab</p>
          </div>
        </div>
      </div>
      <p className="info1" style={{margin: 'auto', textAlign: 'center', fontSize: '50px', marginBottom: '70px', marginTop: '70px'}}>Featured Speakers</p>
      <div className="grid-container">
        {membersArray.map((member) => (
          <SpeakerBox name={member.name} company={member.title} photo={member.headshot}/>
        ))}
      </div>
      <MoreInfo />
      <Footer />
    </div>
  );
};

export default Speakers;