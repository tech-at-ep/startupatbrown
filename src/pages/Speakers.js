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
    ]

  return(
    <div className="container parallax" style={{position: 'relative', background: 'url(images/speakersBackground.png) no-repeat center center'}}>
      <Navbar />
      <Header title='Speakers' caption='We’ll have a series of talks by trailblazing founders, entrepreneurs, and venture captialists' />
      <p className="info1" style={{marginLeft: '300px', textAlign: 'left', fontSize: '50px'}}>Keynote Speakers</p>
      <div className="keynoteSpeakers">
        <div className="speakersRow">
          <SpeakerBox photo={Kroll} name="Charlie Kroll" company="Lithic, fmr. Ellevest"/>
          <SpeakerBox photo="http://www.artnet.com/WebServices/images/ll00354lldUo0GFg9MECfDrCWvaHBOcCMqD/ad-reinhardt-black-square-(+another,-screenprint-on-paper;-2-works).jpg" name="?" company="?"/>
        </div>
      </div>
      <p className="info1" style={{marginLeft: '300px', textAlign: 'left', fontSize: '50px'}}>Featured Speakers</p>
      <div className="grid-container">
        {membersArray.map((member) => (
          <SpeakerBox style={{width: '200px', height: '200px'}} name={member.name} company={member.title} photo={member.headshot}/>
        ))}
      </div>
      <MoreInfo />
      <Footer />
    </div>
  );
};

export default Speakers;