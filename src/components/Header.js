import bImage from "../images/WEXSTARTUPbacground.png";

const Header = (props) => {
  return (
    <div className="header">
      <p className='header1style' style={{fontSize: '20px'}}>Startup@Brown x Women Empowerment</p>
      <p className='header2style' style={{fontSize: '50px', opacity: '0.5'}}>The Brown Entrepreneurship Conference</p>
      <div className="horizontalLine"></div>
      <div className="speakersHeader">
        <p className="info1" style={{fontSize: '70px', paddingTop: '90px'}}>{props.title}</p>
        <p className="info2" style={{fontSize: '30px', inlineSize:'800px', margin: 'auto'}}>{props.caption}</p>
      </div>
    </div>
  )
}
export default Header