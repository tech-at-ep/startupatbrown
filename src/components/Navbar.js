import epLogo from "../images/eplogo.png";

const sendHome = (ev) => {
  ev.preventDefault();
  window.location.href='/';
  }

const sendToSpeaker = (ev) => {
  ev.preventDefault();
  window.location.href='/speakers.html';
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
              <div className="navbutton sticky-thc" onClick={sendToSponsor}>Q&A</div>
              <div className="navbutton sticky-thc" onClick={sendToSponsor}>Companies/Sponsors</div>
              <div className="navbutton sticky-thc" onClick={sendToSponsor}>Recruiting Fair</div>
              <div className="navbutton sticky-thc" onClick={sendToWorkshop}>Pitch Competition</div>
              <div className="navbutton sticky-thc" onClick={sendToSpeaker}>Speakers Page</div>
              <div className="navbutton sticky-thc" onClick={sendToSpeaker}>Home</div>
        </div>
    )
  }

  export default Navbar