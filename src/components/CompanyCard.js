const CompanyCard = (props) => {
    return (
        <div className={props.classN}>
            <img className={props.headshotClass} src={props.headshot}></img>
            <div className="companyCard">
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p className="cardTitle" style={props.textStyle}>{props.name} • {props.company}</p>
                    {/* <p className="cardTitle2" style={props.textStyle}></p> */}
                </div>
                {/* <div style={{inlineSize: '200px'}}>{props.name}</div> */}
                <img className="cardImage" src={props.logo}></img>
                <p className="cardInfo">{props.info}</p>
            </div>
        </div>
    )
  }

  export default CompanyCard