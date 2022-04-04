import { Link } from "react-router-dom";

const sendToSpeaker = (ev) => {
    ev.preventDefault();
    window.location.href='/speakers';
    }

const sendToCompetion = (ev) => {
    ev.preventDefault();
    window.location.href='/competition';
    }

const sendToFair = (ev) => {
    ev.preventDefault();
    window.location.href='/recruiting';
    }

const sendToSchedule = (ev) => {
    ev.preventDefault();
    window.location.href='/schedule';
    }

const sendToRegister = (ev) => {
    ev.preventDefault();
    window.location.href='/register';
    }

const sendToQA = (ev) => {
    ev.preventDefault();
    window.location.href='/QA';
    }

const MoreInfo = () => {
    return (
        <div className='learnMore'>
              <p className='learnMoreText'>Want to Learn More?<br />Check out our other pages for more info</p>
              <div className='learnMoreButtonsGrid'>
                <div className='learnMoreButtonsColumn'>
                  <div className='learnMoreButtonsRow'>
                    <button className='learnMoreButton' onClick={sendToSpeaker}>
                      <p className='learnMoreButtonText'>Speakers</p>
                    </button>
                    <button className='learnMoreButton' onClick={sendToCompetion}>
                      <p className='learnMoreButtonText'>Pitch Competition</p>
                    </button>
                    <button className='learnMoreButton' onClick={sendToFair}>
                      <p className='learnMoreButtonText'>Recruiting Fair</p>
                    </button>
                  </div>
                  <div className='learnMoreButtonsRow'>
                    <button className='learnMoreButton' onClick={sendToSchedule}>
                      <p className='learnMoreButtonText'>Schedule</p>
                    </button>
                    <button className='learnMoreButton' onClick={sendToRegister}>
                      <p className='learnMoreButtonText'>Register Now!</p>
                    </button>
                    <button className='learnMoreButton' onClick={sendToQA}>
                      <p className='learnMoreButtonText'>Q&A</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
    )
  }

  export default MoreInfo