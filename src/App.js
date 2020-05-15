import React from 'react';
import logo from './logo.svg';
import './App.css';
import DungeonEditor from "./DungeonEditor.js";
import StateEditor from './StateEditor';

function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand">
          Pungeon
        </span>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <DungeonEditor />
          </div>
          <div className="col-md-3">
            <StateEditor />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
