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
  
const Navbar = (props) => {
    return (
        <div className="nav sticky-thc" style={props.style}>
          <div className="navtitle sticky-thc" onClick={sendHome}>Startup@Brown</div>
          <div className="navbutton sticky-thc" onClick={sendToSpeaker}>Speakers</div>
          <div className="navbutton sticky-thc" onClick={sendToWorkshop}>Workshops</div>
          <div className="navbutton sticky-thc" onClick={sendToSponsor}>Sponsors</div>
        </div>
    )
  }

  export default Navbar