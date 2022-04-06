const Header = (props) => {
  return (
    <div className="header">
      <p className='header1style' style={{fontSize: '20px'}}>Startup@Brown x Women Empowerment</p>
      <p className='header2style' style={{fontSize: '50px', opacity: '0.5'}}>The Brown Entrepreneurship Conference</p>
      <div className="horizontalLine"></div>
      <div className="speakersHeader" style={{height: props.height}}>
        <p className="info1" style={{fontSize: '70px', paddingTop: '70px', inlineSize:'1000px', margin: 'auto', marginBottom:'50px'}}>{props.title}</p>
        <p className="info2" style={{fontSize: '30px', inlineSize:'800px', margin: 'auto'}}>{props.caption}</p>
      </div>
    </div>
  )
}
export default Header