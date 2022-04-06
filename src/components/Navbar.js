import epLogo from "../images/eplogo.png";
import { Link } from "react-router-dom";

const sendRegister = (ev) => {
  ev.preventDefault();
  window.location.href='https://www.eventbrite.com/e/2022-brown-entrepreneurship-conference-tickets-295260390777';
  }
  
const Navbar = () => {
    return (
        <div className="nav">
              <img className="navLogo" src={epLogo}></img>
              <div className="registerButton" onClick={sendRegister}><div className="registerButtonText">REGISTER NOW</div></div>
              <Link className="navbutton" to="/QA" style={{width: '6%'}}>Q&A</Link>
              <Link className="navbutton" to="/schedule"  style={{width: '9%'}}>Schedule</Link>
              <Link className="navbutton" to="/recruiting"  style={{width: '12%'}}>Recruiting Fair</Link>
              <Link className="navbutton" to="/competition"  style={{width: '12%'}}>Pitch Competition</Link>
              <Link className="navbutton" to="/speakers"  style={{width: '12%'}}>Speakers Page</Link>
              <Link className="navbutton navHomeButton" to="/"  style={{width: '8%'}}>Home</Link>
        </div>
    )
  }

  export default Navbar