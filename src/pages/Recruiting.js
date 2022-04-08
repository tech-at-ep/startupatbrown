import React from "react";
import Navbar from '../components/Navbar';
import MoreInfo from '../components/MoreInfo';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CompanyCard from "../components/CompanyCard";
//left column:
import Kroll from '../images/download.jpeg';
import Lithic from '../images/LiticLCC.png';
import Perez from '../images/Valentin Perez.jpeg';
import Monthly from '../images/Monthly.webp';
import Bachenberg from '../images/Maggie Bachenberg Pointz.jpeg';
import Pointz from '../images/Pointz.png'; //download this
import Kohler from '../images/Abbie Kohler ResusciTech.jpeg';
import ResusciTech from '../images/RTech.png'// download this
import Beren from '../images/Beren Rana Oz Cohart.jpeg';
import Cohart from '../images/Cohart.jpeg'; //download this
import Cliff from '../images/Cliff Weitzman.jpeg';
import Speechify from '../images/Speechify2.png' //download this
import Pryor from '../images/Guayaki.jpeg';
import Guayaki from '../images/Guayaki.png'; //download this
import Schaeffer from '../images/Jack Schaeffer Eliza Sternlicht.jpeg';
import Medicircle from '../images/Medicircle.png';//download this
import AlexEvan from '../images/Alex Rothburg Evan Jackson.png';//download this
import IntusCare from '../images/IntusCare.png';//download this
//right column:
import Baumann from '../images/Will Baumann.jpeg';
import Fourthwall from '../images/Fourthwall.png';
import Margulius from '../images/Quizlet.jpeg';
import Quizlet from '../images/Quizlet.png';
import Qi from '../images/Christina Qi.jpeg';
import Databento from '../images/Databento.png';
import Kraft from '../images/Daniel Kraft.jpeg';
import DHealth from '../images/Digital Health.png';
import Xu from '../images/Julia L. Xu Multitasky.jpeg';
import Multitasky from '../images/Multitasky.png';
import Altman from '../images/Miriam Altman Powerschool.jpeg';
import Powerschool from '../images/Powerschool.png';
import Kurup from '../images/Meera Kurup EmpowerU.jpeg';
import EmpowerU from '../images/EmpowerU.png';
import Moos from '../images/Kathryn Moos OWYN.webp';
import OWYN from '../images/OWYN.png';
import Tatiana from '../images/Tatiana Mandis  1.png';
import Cinemates from '../images/Cinemates.png';
import Jerry from '../images/Jerry Talton.png';
import Mary from '../images/Mary Lou Jepsen.png';
import Patty from '../images/Patty Hostin (1).png';
import Blackrock from '../images/BlackRock.png';
import Carta from '../images/Carta.png';
import Openwater from '../images/Openwater.png';


const membersArrayL = [
  // {name: "Charlie Kroll", company: "Lithic, fmr. Ellevest", headshot: Kroll, logo: Lithic, info: "Developer tools for modern card issuing"},
  {name: "Valentin Perez", company: "Monthly", link: "https://www.google.com/", headshot: Perez, logo: Monthly, info: "Take hands-on, one-month classes with the world’s best instructors. Learn from your favorite creators."},
  {name: "Maggie Bachenburg", company: "Pointz", headshot: Bachenberg, logo: Pointz, info: "Pointz is a mobile app that allows people to create safe, customized micro-mobility routes."},
  // {name: "Patty Sweeny", company: "BlackRock", headshot: Patty, logo: Blackrock, info: "Global investment manager. Technology provider. Helping more and more people experience financial well-being."},
  // {name: "Abbie Kohley", company: "ResusciTech", headshot: Kohler, logo: ResusciTech, info: "Giving people the confidence and capability to perform CPR."},
  // {name: "Beren Rana Oz", company: "Cohart", headshot: Beren, logo: Cohart, info: "Social commerce platform connecting visual creators with their consumers in web3."},
  {name: "Cliff Weitzman", company: "Speechify", headshot: Cliff, logo: Speechify, info: "Get your reading done faster, easier, and on the go. Listen to any book, document, or website with Speechify."},
  // {name: "Alex Pryor", company: "Guayaki", headshot: Pryor, logo: Guayaki, info: "Sharing yerba mate to regenerate ecosystems and create vibrant communities."},
  // {name: "Mary Lou Jepsen", company: "Openwater", headshot: Mary, logo: Openwater, info: "Devising a new generation of imaging technologies to change how we read and write our bodies and brains."},
  {name: "Jerry Talton", company: "Carta", headshot: Jerry, logo: Carta, info: "Carta helps companies and investors manage their cap tables, valuations, investments, and equity plans."},

]

const membersArrayR = [
  // {name: "Will Baumann", company: "Fourthwall", headshot: Baumann, logo: Fourthwall, info: "Fourthwall empowers digital creators to turn their personal brands into businesses."},
  // {name: "Dave Margulius", company: "Quizlet", headshot: Margulius, logo: Quizlet, info: "Helping students (and their teachers) practice and master whatever they are learning."},
  {name: "Christina Qi", company: "Databento", headshot: Qi, logo: Databento, info: "Pas-as-you-go for financial data"},
  // {name: "Daniel Kraft", company: "Digital Health", headshot: Kraft, logo: DHealth, info: ""},
  {name: "Julia L. Xu", company: "Multitasky", headshot: Xu, logo: Multitasky, info: "Elevate your lifestyle with trendy, (FUN)ctional & aesthetic gadgets."},
  // {name: "Miriam Altman", company: "PowerSchool", headshot: Altman, logo: Powerschool, info: "PowerSchool is the leading provider of cloud-based software for K-12 education in North America."},
  // {name: "Meera Kurup", company: "EmpowerU", headshot: Kurup, logo: EmpowerU, info: "Ed-Tech Platform that provides students with the resources and tools they need to obtain higher education."},
  {name: "Kathryn Moos", company: "OWYN", headshot: Moos, logo: OWYN, info: "Plant based health and nutrition company that is true to its name, Only What You Need."},
  {name: "Tatiana Mandis", company: "Cinemates", headshot: Tatiana, logo: Cinemates, info: ""},
]

const RtextStyle = {
  textAlign: 'right',
  marginRight: 'auto',
  marginLeft: 'auto'
}

const Recruiting = () => {

  return(
    <div className="container" style={{position: 'relative'}}>
      <Navbar />
      <Header title='Recruiting Fair' caption="Join us on April 10th 4:15 - 6:30PM with representatives looking to hire!" />
      <div className="cardColumns">
        <div className="cardColumn">
        {membersArrayL.map((member) => (
          <CompanyCard link={member.link} name={member.name} company={member.company} headshot={member.headshot} logo={member.logo} info={member.info} classN="cardContainerL" headshotClass="cardHeadshotL"/>
        ))}
        <div className="cardContainerL">
            <img className="cardHeadshot" src={Schaeffer}></img>
            <div className="companyCard">
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p className="cardTitleLL">Jack Schaeffer<br />Eliza Sternlicht</p><p className="cardTitleLR"> • Medicircle</p>
                    {/* <p className="cardTitle2" style={props.textStyle}></p> */}
                </div>
                {/* <div style={{inlineSize: '200px'}}>{props.name}</div> */}
                <img className="cardImage" src={Medicircle}></img>
                <p className="cardInfo">Connecting cancer medications to those in need.</p>
            </div>
        </div>
        {/* <div className="cardContainerL">
            <img className="cardHeadshot" src={AlexEvan}></img>
            <div className="companyCard">
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p className="cardTitleLL">Alex Rothburg<br />Evan Jackson</p><p className="cardTitleLR"> • Intus Care</p>
                </div>
                <img className="cardImage" src={IntusCare}></img>
                <p className="cardInfo">A healthcare analytics platform that synthesizes healthcare data to indentify risks, visualize trends, and optimize care.</p>
            </div>
        </div> */}
        </div>
        <div className="cardColumnR">
        {membersArrayR.map((member) => (
          <CompanyCard name={member.name} company={member.company} headshot={member.headshot} logo={member.logo} info={member.info} textStyle={RtextStyle} classN="cardContainerR"  headshotClass="cardHeadshotR"/>
        ))}
        </div>
      </div>
      <MoreInfo />
      <Footer />
    </div>
  );
};

export default Recruiting;