const Header = (props) => {
  return (
    <div className="header">
      <p className='header1style' style={{fontSize: '20px'}}>Startup@Brown x Women Empowerment</p>
      <p className='header2style' style={{fontSize: '50px', opacity: '0.5'}}>The Brown Entrepreneurship Conference</p>
      <div className="horizontalLine"></div>
      <div className="speakersHeader" style={{height: props.height}}>
        <p className="Hinfo1">{props.title}</p>
        <p className="Hinfo2">{props.caption}</p>
      </div>
    </div>
  )
}
export default Header