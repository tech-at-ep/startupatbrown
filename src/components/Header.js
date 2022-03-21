import bImage from "../images/WEXSTARTUPbacground.png";

const headingStyle = {
    color: 'brown', 
    backgroundColor: 'grey'
}

const Header = (props) => {
  return (
    <header>
        <img src={bImage} style={{width: '100%', zIndex: '100'}}></img>
    </header>
  )
}

export default Header