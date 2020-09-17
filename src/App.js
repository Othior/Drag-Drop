import React, { createRef, useEffect, useRef, useState } from 'react';
import ReactDom from "react-dom";
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Note from './components/Note';
import Delete from './components/Delete';


function App() {

  return (
    <div className="App">
        <div id="yes" className="grid-note">
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item"></Note>
          <Note id="move" className="grid-item">
            <Card id="eee" className="grid-item-active" draggable="true"></Card> 
          </Note>
          <Note id="move" className="grid-item">
            <Card id="ok" className="grid-item-active" draggable="true"></Card> 
          </Note>
          
        </div>
        {/* <Delete id="delete" className="delete-note"></Delete> */}
    
    </div>
  );

}


export default App;
