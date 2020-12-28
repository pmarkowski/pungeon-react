import TOOL_TYPE from "../tools/toolType";
import * as EditorActions from './editorActions';
import { editorReducer } from "./editorReducer";

let defaultEditorState = {
    scrollMovesViewport: false,
    mouseDown: false,
    mouseStartX: 0,
    mouseStartY: 0,
    selectedTool: TOOL_TYPE.NEW_SPACE_RECTANGLE,
    scale: 100,
    position: {
        x: 0,
        y: 0
    },
    mouse: {
        dungeonPosition: {
            x: 0,
            y: 0
        }
    }
};

test('Scrolling down lowers scale by 10', () => {
    let scrollDownAction = EditorActions.scroll(0, 1, false);
    let newState = editorReducer(defaultEditorState, scrollDownAction);
    expect(newState.scale).toBe(90);
});

test('Scrolling up increases scale by 10', () => {
    let scrollUpAction = EditorActions.scroll(0, -1, false);
    let newState = editorReducer(defaultEditorState, scrollUpAction);
    expect(newState.scale).toBe(110);
});

test('Scrolling down does not lower scale below 10', () => {
    let minimumScrollState = {
        ...defaultEditorState,
        scale: 10
    };
    let scrollDownAction = EditorActions.scroll(0, 1, false);

    let newState = editorReducer(minimumScrollState, scrollDownAction);

    expect(newState.scale).toBe(10);
})

test('Scrolling up does not increase scale above 200', () => {
    let minimumScrollState = {
        ...defaultEditorState,
        scale: 200
    };
    let scrollUpAction = EditorActions.scroll(0, -1, false);

    let newState = editorReducer(minimumScrollState, scrollUpAction);

    expect(newState.scale).toBe(200);
})
