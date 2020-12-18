import { combineReducers } from 'redux'
import dungeonReducer from './dungeonReducer'
import { editorReducer } from './editorReducer'

export default combineReducers({
    editor: editorReducer,
    dungeon: dungeonReducer
})
