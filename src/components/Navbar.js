import epLogo from "../images/eplogo.png";
import { Link } from "react-router-dom";

const sendHome = (ev) => {
  ev.preventDefault();
  window.location.href='/';
  }

const sendToSpeaker = (ev) => {
  ev.preventDefault();
  window.location.href='/speakers';
  }

const sendToWorkshop = (ev) => {
  ev.preventDefault();
  window.location.href='/workshops.html';
  }  

const sendToSponsor = (ev) => {
  ev.preventDefault();
  window.location.href='/sponsors.html';
  }
  
const Navbar = () => {
    return (
        <div className="nav">
              <img className="navLogo" src={epLogo}></img>
              <Link className="navbutton" to="/QA">Q&A</Link>
              <Link className="navbutton" to="/schedule">Schedule</Link>
              <Link className="navbutton" to="/recruiting">Recruiting Fair</Link>
              <Link className="navbutton" to="/competition">Pitch Competition</Link>
              <Link className="navbutton" to="/speakers">Speakers Page</Link>
              <Link className="navbutton navHomeButton" to="/">Home</Link>
        </div>
    )
  }

  export default Navbar