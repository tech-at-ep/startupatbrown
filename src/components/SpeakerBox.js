const SpeakerBox = (props) => {
    return (
        <div className="speakerBox" style={props.style}>
            <img className="speakerImage" src={props.photo}></img>

            <p className="speakerName">{props.name}</p>
            <p className="speakerCompany">{props.company}</p>
        </div>
    )
  }

  export default SpeakerBox