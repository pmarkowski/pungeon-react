import React from 'react';
import DungeonEditor from "./components/DungeonEditor.js";
import StateEditor from './components/StateEditor';
import Toolbar from './components/Toolbar';

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
        <div className="parent" style={{ display: 'flex', height: "100%" }}>
          <div className="pane" style={{resize: "horizontal", overflow: "hidden", height: "100%"}}>
            <DungeonEditor />
          </div>
          <div className="pane" style={{flex: 1}}>
            <StateEditor />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
