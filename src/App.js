import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Navbar from './components/Navbar';
import bImage from "./images/WEXSTARTUPbacground.png";

const imageStyle = {
  width: '100%',
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: '1',
}

const navStyle = {
  position: 'relative',
  zIndex: '5',
  color: 'white',
}

function App() {
  
  return (
    <div className="container" style={{position: 'relative'}}>
        <img src={bImage} style={imageStyle}></img>
      <Navbar style={navStyle}/>
      {/* <Header title='Startup@Brown'/> */}
    </div>
  );
}

export default App;