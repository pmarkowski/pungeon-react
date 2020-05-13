import React from 'react';
import logo from './logo.svg';
import './App.css';
import DungeonEditor from "./DungeonEditor.js";
import StateEditor from './StateEditor';

function App() {
  return (
    <div className="App">
      <DungeonEditor />
      <StateEditor />
    </div>
  );
}

export default App;
