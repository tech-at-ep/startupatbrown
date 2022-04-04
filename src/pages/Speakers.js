import React from "react";
import Navbar from '../components/Navbar';
import MoreInfo from '../components/MoreInfo';
import Footer from '../components/Footer';
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

const Speakers = () => {

  const membersArray = [
    {name: "Will Baumann", title: "Fourthwall", headshot: Baumann},
    {name: "Valentin Perez", title: "Monthly", headshot: Perez},
    {name: "Dave Margulius", title: "Quizlet", headshot: Margulius},
    {name: "Maggie Bachenberg", title: "Pointz", headshot: Pointz},
    {name: "Christina Qi", title: "Domeyard LP", headshot: Qi},
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
    {name: "Jack Schaeffer Eliza Sternlicht", title: "OWYN", headshot: Schaeffer},
    {name: "Tatiana Mandis", title: "Cinemates", headshot: "https://asa-groundhandling.com/wp-content/uploads/2019/10/placeholder-person-square.png"},
    ]

  return(
    <div className="container parallax" style={{position: 'relative', background: 'url(images/speakersBackground.png) no-repeat center center'}}>
      <Navbar />
      <p className='header1style' style={{fontSize: '20px'}}>Startup@Brown x Women Empowerment</p>
      <p className='header2style' style={{fontSize: '50px', opacity: '0.5'}}>The Brown Entrepreneurship Conference</p>
      <div className="horizontalLine"></div>
      <div className="speakersHeader">
        <p className="info1" style={{fontSize: '70px', paddingTop: '90px'}}>Speakers</p>
        <p className="info2" style={{fontSize: '30px'}}>We’ll have a series of talks by trailblazing founders,<br />entrepreneurs, and venture captialists</p>
      </div>
      <p className="info1" style={{marginLeft: '300px', textAlign: 'left', fontSize: '70px'}}>Keynote Speakers</p>
      <div className="keynoteSpeakers">
        <div className="speakersRow">
          <SpeakerBox photo={Kroll} name="Charlie Kroll" company="Lithic, fmr. Ellevest"/>
          <SpeakerBox photo="http://www.artnet.com/WebServices/images/ll00354lldUo0GFg9MECfDrCWvaHBOcCMqD/ad-reinhardt-black-square-(+another,-screenprint-on-paper;-2-works).jpg" name="?" company="?"/>
        </div>
      </div>
      <p className="info1" style={{marginLeft: '300px', textAlign: 'left', fontSize: '70px'}}>Featured Speakers</p>
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