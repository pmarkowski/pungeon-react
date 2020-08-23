import React from 'react';
import DungeonEditor from "./components/DungeonEditor.js";
import StateEditor from './components/StateEditor';
import Toolbar from './components/Toolbar';
import ObjectSelector from './components/ObjectSelector.js';

function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-secondary">
        <span className="navbar-brand">
          Pungeon
        </span>
      </nav>
      <div className="px-5">
            <div className="py-2">
              <Toolbar />
            </div>
        <div className="row">
          <div className="col-md-2">
            <ObjectSelector />
          </div>
          <div className="col-md-8">
            <DungeonEditor />
          </div>
          <div className="col-md-2">
            <StateEditor />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
