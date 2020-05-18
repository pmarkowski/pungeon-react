import React from 'react';
import './App.css';
import DungeonEditor from "./DungeonEditor.js";
import StateEditor from './StateEditor';
import Toolbar from './Toolbar';

function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-secondary">
        <span className="navbar-brand">
          Pungeon
        </span>
      </nav>
      <div className="container">
        <div className="py-2">
          <Toolbar />
        </div>
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
