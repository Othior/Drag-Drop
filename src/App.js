import React, { createRef, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Note from './components/Note';
import Delete from './components/Delete';


function App() {
  const [listNote,SetListNote] = useState([]);
  const note = document.querySelectorAll(".grid-item");

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
          <Note id="move" className="grid-item">
            <Card id="ok" className="grid-item-active" draggable="true">.</Card> 
          </Note>
        </div>
        <Delete id="delete" className="delete-note"></Delete>
    
    </div>
  );

}


export default App;
