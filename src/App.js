import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Board id="board-1" className="board">
        <Card id="card-1" className="card" draggable="true">
          <p>Card One</p>
        </Card>
      </Board>
     <hr></hr>
      <Board id="board-2" className="board">
        <Card id="card-2" className="card" draggable="true">
          <p>Card Two</p>
        </Card>
      </Board>
    </div>
  );
}

export default App;
