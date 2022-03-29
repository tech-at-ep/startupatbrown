import brownLogo from "../images/brownLogo.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerLogo">
                <img className="footerLogoImage" src={brownLogo}></img>
            </div>
            <div className="footerTextBox">
                <div className="footerText">Copyright © 2021<br/>Brown Entrepreneurship Program</div>
                <div className="footerText">Hosted by<br/>Brown EP and Tech@EP</div>
                <div className="footerText">Connect with us on<br/>Facebook, Twitter, or Email</div>
            </div>
        </div>
    )
  }

  export default Footer