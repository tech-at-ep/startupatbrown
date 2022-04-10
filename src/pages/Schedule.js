import React from "react";
import Navbar from '../components/Navbar';
import MoreInfo from '../components/MoreInfo';
import Footer from '../components/Footer';
import Header from '../components/Header';

const sendItinerary = (ev) => {
  ev.preventDefault();
  window.location.href='https://docs.google.com/document/d/1pi82BnAXeLagaWCu0KNzQOrx0AaUQfEKHyxwBUP2egg/edit';
  }

const Schedule = () => {

  return(
    <div className="container" style={{position: 'relative'}}>
      <Navbar />
      <div className="header">
      <p className='header1style' style={{fontSize: '20px'}}>Startup@Brown x Women Empowerment</p>
      <p className='header2style' style={{fontSize: '50px', opacity: '0.5'}}>The Brown Entrepreneurship Conference</p>
      <div className="horizontalLine"></div>
      <div className="speakersHeader" style={{height: '500px'}}>
        <p className="Hinfo1">Brown Entrepreneurship Conference Schedule</p>
        <p className="Hinfo2">April 9 & April 10</p>
        <div className="headerButton" onClick={sendItinerary} style={{marginTop: '3%'}}>
        <p className='headerButtonText'>See Itinerary Here</p>
      </div>
      </div>
    </div>
      <div style={{display: 'flex', flexDirection: 'row', marginTop: '-50px', marginBottom: '50px'}}>
      
      </div>
      <div className="daySchedule">
        <p className="dayNumber">Day 1<br />April 9th</p>
        <div style={{width: '75%', margin: 'auto'}}>
          <div className="tableHeader">
            <p className="timeHeader">Time</p>
            <p className="eventHeader">Event</p>
            <p className="locationHeader">Location</p>
          </div>
        </div>
        <div className="scheduleTable">
          <div className="tableRow" style={{paddingTop: "60px"}}>
            <p className="time">11:30</p>
            <p className="event">Check-in table<br /><p className="smallEventText">• Donuts will be provided :)</p></p>
            <p className="location">Sayles</p>
          </div>
          <div className="tableRow">
            <p className="time">12:00 - 1:00</p>
            <p className="event">Keynote Discussion</p>
            <p className="location">Sayles</p>
          </div>
          <div className="tableRow">
            <p className="time">1:15 - 2:00</p>
            <p className="event">Speaker Workshops 1 (4 speakers)<br /><p className="smallEventText">• Christina Qi - Conversations You Can't Have on Campus: Harsh Lessons from the Startup World</p><br /><p className="smallEventText" style={{marginTop: '0px'}}>• Julia L. Xu - What's Your Next Big Thing? Exploring different career paths (corporate/freelance/entrepreneurship)</p><br /><p className="smallEventText" style={{marginTop: '0px'}}>• Mary Lou Jepsen - Moderated Q&A</p><br /><p className="smallEventText" style={{marginTop: '0px'}}>• Patricia Hostin - Keys to Career Success: Just One Woman’s Perspective</p></p>
            <p className="location">Sayles<br />Classrooms</p>
          </div>
          <div className="tableRow">
            <p className="time">2:00 - 3:00</p>
            <p className="event">Attendee Networking Break<br /><p className="smallEventText">• Catered food (Kabob and Curry)</p></p>
            <p className="location">Sayles</p>
          </div>
          <div className="tableRow">
            <p className="time">3:15 - 4:00</p>
            <p className="event">Speaker Workshops 2 (4 speakers)<br /><p className="smallEventText">• Alex Pryor - Serving the Yerba Mate Plant</p><br /><p className="smallEventText" style={{marginTop: '0px'}}>• Abbie Kohler - Early Commercialization: From Development to Beachhead</p><br /><p className="smallEventText" style={{marginTop: '0px'}}>• Alex Rothberg - Creating a Culture that Scales</p><br /><p className="smallEventText" style={{marginTop: '0px'}}>• Dave Margulius - The Founder's Creative Journey</p></p>
            <p className="location">Sayles<br />Classrooms</p>
          </div>
          <div className="tableRow" style={{paddingBottom: '60px'}}>
            <p className="time">4:15 - 6:00</p>
            <p className="event">Pitch Competition<br /><p className="smallEventText">• Merch distribution at check-in<br />• $1000 first prize, $250 audience’s choice</p></p>
            <p className="location">Sayles Auditorium</p>
          </div>
        </div>
      </div>

      <div className="daySchedule">
        <p className="dayNumber">Day 2<br />April 10th</p>
        <div style={{width: '75%', margin: 'auto'}}>
          <div className="tableHeader" style={{width: '90%', marginLeft: '10%'}}>
            <p className="timeHeader" style={{width: '20%'}}>Time</p>
            <p className="eventHeader" style={{width: '50%'}}>Event</p>
            <p className="locationHeader" style={{width: '30%'}}>Location</p>
          </div>
        </div>
        <div className="scheduleTable">
          <div className="tableRow" style={{paddingTop:'60px', width: '90%', marginLeft: '10%'}}>
            <p className="time2" style={{width:'20%'}}>11:30</p>
            <p className="event2" style={{width:'50%'}}>Check-in table<br /><p className="smallEventText">• Donuts will be provided :)</p></p>
            <p className="location2" style={{width:'30%'}}>Main Green</p>
          </div>
          <div className="tableRow" style={{width: '90%', marginLeft: '10%'}}>
            <p className="time2">12:00 - 1:00</p>
            <p className="event2">Keynote Speaker (Charlie Kroll) </p>
            <p className="location2">Main Green</p>
          </div>
          <div className="tableRow" style={{width: '90%', marginLeft: '10%'}}>
            <p className="time2">1:15 - 2:00</p>
            <p className="event2">Speaker Workshops 3 (4 speakers)<br /><p className="smallEventText">• Cliff Weitzman - How I built 36 products as a student at Brown, which lead to 18 million users and 120 full-time teammates</p><br /><p className="smallEventText" style={{marginTop: '0px'}}>• Tatiana Mandis - The Power of Storytelling - How to Pitch Your Company</p><br /><p className="smallEventText" style={{marginTop: '0px'}}>• Beren Rana Oz - The Secret Sauce for Entrepreneurial Success</p><br /><p className="smallEventText" style={{marginTop: '0px'}}>• Jerry Talton - Moderated Q&A</p></p>
            <p className="location2">Page-Robinson<br />Classrooms</p>
          </div>
          <div className="tableRow" style={{width: '90%', marginLeft: '10%'}}>
            <p className="time2">2:00 - 3:00</p>
            <p className="event2">Raffle Break + Food Truck<br /><p className="smallEventText">• Food truck arrives and parked near Sayles<br />• Raffles on Main Green</p></p>
            <p className="location2">Main Green</p>
          </div>
          <div className="tableRow" style={{width: '90%', marginLeft: '10%'}}>
            <p className="time2">3:15 - 4:00</p>
            <p className="event2">3:15-4:00 Speaker Workshops 4 (4 speakers)<br /><p className="smallEventText">• Valentin Perez - Starting Companies in College and Right After College</p><br /><p className="smallEventText" style={{marginTop: '0px'}}>• Maggie Bachenberg - Navigating Entrepreneurship at Brown and Getting Funded Before Graduation</p><br /><p className="smallEventText" style={{marginTop: '0px'}}>• Elvia Perez - EmpowerU's Entrepreneurship Journey at Brown: How to Take Advantage of Brown's Resources & Classes</p><br /><p className="smallEventText" style={{marginTop: '0px'}}>• Jack Schaeffer - I Have An Idea But Don't Know Where to Start: The Playbook of an Early-Stage Entrepreneur</p></p>
            <p className="location2">Page-Robinson<br />Classrooms</p>
          </div>
          <div className="tableRow" style={{width: '90%', marginLeft: '10%', paddingBottom: '60px'}}>
            <p className="time2">4:15 - 6:00</p>
            <p className="event2">Recruiting Fair<br />Professional Networking<br /><p className="smallEventText">• Food truck still parked near Sayles</p></p>
            <p className="location2">Main Green</p>
          </div>
        </div>
        <p className="weatherCaution">*Location will vary depending on weather</p>
      </div>

      <MoreInfo />
      <Footer />
    </div>
  );
};

export default Schedule;