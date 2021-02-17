import React from 'react';
import DungeonEditor from "./components/DungeonEditor.js";
import StateEditor from './components/StateEditor';
import Toolbar from './components/Toolbar';

function App() {
  return (
    <div className="flex flex-col w-full h-full bg-gray-50 text-gray-900">
      <nav className="bg-gray-300 p-3">
        <span className="text-4xl font-thin align-text-bottom">
          pungeon
        </span>
      </nav>
      <div className="px-3 py-2">
        <Toolbar />
      </div>
      <div className="flex-grow flex px-3 pb-2">
        <div className="flex-grow">
          <DungeonEditor />
        </div>
        <div className="w-96 pl-2">
          <StateEditor />
        </div>
      </div>
    </div>
  );
}

export default App;
