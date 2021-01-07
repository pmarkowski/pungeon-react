import { combineReducers } from 'redux'
import dungeonReducer from './dungeonReducer'
import { editorReducer } from './editorReducer'

/**
 * @typedef {{
 *  editor: import('./editorReducer').EditorState,
 *  dungeon: Object
 * }} State
 */

export default combineReducers({
    editor: editorReducer,
    dungeon: dungeonReducer
})
