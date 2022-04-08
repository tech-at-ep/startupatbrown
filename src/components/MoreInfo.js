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

const sendRegister = (ev) => {
  ev.preventDefault();
  window.location.href='https://www.eventbrite.com/e/2022-brown-entrepreneurship-conference-tickets-295260390777';
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
                    <button className='learnMoreButton' onClick={sendRegister}>
                      <p className='learnMoreButtonText'>Register Now!</p>
                    </button>
                    <button className='learnMoreButton' onClick={sendToQA}>
                      <p className='learnMoreButtonText'>FAQ</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
    )
  }

  export default MoreInfo