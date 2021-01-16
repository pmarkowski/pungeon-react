import { combineReducers } from 'redux'
import dungeonReducer from './dungeonReducer'
import { editorReducer } from './editorReducer'

/**
 * @typedef {{
 *  editor: import('./editorReducer').EditorState,
 *  dungeon: import('./dungeonReducer').DungeonState
 * }} State
 */

export default combineReducers({
    editor: editorReducer,
    dungeon: dungeonReducer
})
