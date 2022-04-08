import React from 'react';
import { useHistory } from "react-router-dom";

const CompanyCard = (props) => {

    const history = useHistory();

    const routeChange = () =>{ 
      let path = `https://exerror.com/react-button-onclick-redirect-page/`; 
      history.push(path);
    }
  

    return (
        <a target="_blank" href={props.link} style={{textDecoration: 'none'}}>
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
        </a>
    )
  }

  export default CompanyCard