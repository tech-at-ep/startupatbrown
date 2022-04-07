import React from "react";
import Navbar from '../components/Navbar';
import MoreInfo from '../components/MoreInfo';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Schedule = () => {

  return(
    <div className="container" style={{position: 'relative'}}>
      <Navbar />
      <Header title="Brown Entrepreneurship Conference Schedule" caption='April 9  ~ April 10' height='400px'/>
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
            <p className="event">Check-in table<br /><p className="smallEventText">• Breakfast Food</p></p>
            <p className="location">Sayles</p>
          </div>
          <div className="tableRow">
            <p className="time">12:00 ~ 1:00</p>
            <p className="event">Keynote Speaker</p>
            <p className="location">Sayles</p>
          </div>
          <div className="tableRow">
            <p className="time">1:15 ~ 2:00</p>
            <p className="event">Speaker Workshops</p>
            <p className="location">Sayles<br />Classrooms</p>
          </div>
          <div className="tableRow">
            <p className="time">2:00 ~ 3:00</p>
            <p className="event">Atendee Networking Session<br /><p className="smallEventText">• Catered food + social + entertainment<br />&nbsp;&nbsp;(comedy group)</p></p>
            <p className="location">Sayles</p>
          </div>
          <div className="tableRow" style={{paddingBottom: '60px'}}>
            <p className="time">3:15 ~ 4:00</p>
            <p className="event">Pitch Competition<br /><p className="smallEventText">• Merch distribution at check-in<br />• $1000 first prize, $250 audience’s choice</p></p>
            <p className="location">Sayles<br />Auditorium</p>
          </div>
        </div>
      </div>

      <div className="daySchedule">
        <p className="dayNumber">Day 2<br />April 10th</p>
        <div style={{width: '75%', margin: 'auto'}}>
          <div className="tableHeader" style={{width: '90%', marginLeft: '10%'}}>
            <p className="timeHeader" style={{width: '25%'}}>Time</p>
            <p className="eventHeader" style={{width: '45%'}}>Event</p>
            <p className="locationHeader" style={{width: '30%'}}>Location</p>
          </div>
        </div>
        <div className="scheduleTable">
          <div className="tableRow" style={{paddingTop:'60px', width: '90%', marginLeft: '10%'}}>
            <p className="time2" style={{width:'25%'}}>11:30</p>
            <p className="event2" style={{width:'45%'}}>Check-in table<br /><p className="smallEventText">• Breakfast Food</p></p>
            <p className="location2" style={{width:'30%'}}>Main Green or<br />Metcalf Auditorium</p>
          </div>
          <div className="tableRow" style={{width: '90%', marginLeft: '10%'}}>
            <p className="time2">12:00 ~ 1:00</p>
            <p className="event2">Keynote Speaker:<br />Charlie Kroll</p>
            <p className="location2">Main Green or<br />Metcalf Auditorium</p>
          </div>
          <div className="tableRow" style={{width: '90%', marginLeft: '10%'}}>
            <p className="time2">1:15 ~ 2:00</p>
            <p className="event2">Speaker Workshops</p>
            <p className="location2">Page-Robinson<br />Classrooms</p>
          </div>
          <div className="tableRow" style={{width: '90%', marginLeft: '10%'}}>
            <p className="time2">2:00 ~ 3:00</p>
            <p className="event2">Raffle + Food Break<br /><p className="smallEventTextB">• Food truck arrives and parked near Sayles<br />• Raffles on Main Green or Metcalf Auditorium</p></p>
            <p className="location2">Sayles/Main Green<br />or<br />Metcalf Auditorium</p>
          </div>
          <div className="tableRow" style={{width: '90%', marginLeft: '10%'}}>
            <p className="time2">3:15 ~ 4:00</p>
            <p className="event2">Speaker Workshops</p>
            <p className="location2">Page-Robinson<br />Classrooms</p>
          </div>
          <div className="tableRow" style={{width: '90%', marginLeft: '10%', paddingBottom: '60px'}}>
            <p className="time2">4:15 ~ 6:00</p>
            <p className="event2">Recruiting fair &<br />Professional Networking/social</p>
            <p className="location2">Main Green or<br />in classroom</p>
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