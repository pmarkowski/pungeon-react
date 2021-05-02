import React from 'react';
import { connect } from 'react-redux';
import DungeonEditor from "./components/DungeonEditor.js";
import StateEditor from './components/StateEditor';
import Toolbar from './components/Toolbar';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import THEME from './utils/theme.js';

let App = ({ darkMode }) => {
  return (
    <div className={"h-full " + (darkMode ? "dark" : "")}>
      <div className="flex flex-col w-full h-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-50">
        <nav className="p-3 shadow bg-gray-50 dark:bg-gray-800">
          <span className="text-4xl font-thin align-text-bottom">
            pungeon
          </span>
        </nav>
        <div className="p-3">
          <Toolbar />
        </div>
        <div className="flex-grow flex px-3 pb-2 overflow-hidden">
          <div className="flex-grow">
            <DungeonEditor />
          </div>
          <SimpleBar className="w-80 pl-2" autoHide={false}>
            <div className="mr-4">
              <StateEditor />
            </div>
          </SimpleBar>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  darkMode: state.editor.theme === THEME.DARK_THEME ||
    (state.editor.theme === THEME.SYSTEM_THEME && window.matchMedia("(prefers-color-scheme: dark)").matches)
})

App = connect(mapStateToProps)(App);

export default App;
