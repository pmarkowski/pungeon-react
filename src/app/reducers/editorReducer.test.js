import TOOL_TYPE from "../tools/toolType";
import * as EditorActions from './editorActions';
import { defaultEditorState, editorReducer } from "./editorReducer";

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

test('Selecting a non-select tool clears selected object', () => {
    let nonSelectToolState = {
        ...defaultEditorState,
        selectedTool: TOOL_TYPE.SELECT,
        selectedObject: 'beep-boop'
    };
    let changeToolAction = EditorActions.selectTool(TOOL_TYPE.NEW_TOKEN);

    let newState = editorReducer(nonSelectToolState, changeToolAction);

    expect(newState.selectedObject).toBeNull();
})

test('Selecting select tool does not clear selected object', () => {
    let nonSelectToolState = {
        ...defaultEditorState,
        selectedTool: TOOL_TYPE.SELECT,
        selectedObject: 'beep-boop'
    };
    let changeToolAction = EditorActions.selectTool(TOOL_TYPE.SELECT);

    let newState = editorReducer(nonSelectToolState, changeToolAction);

    expect(newState.selectedObject).toBe('beep-boop');
})

test('Moving mouse sets mouse position', () => {
    let mouseMoveAction = EditorActions.setMouseDungeonPosition(6, 7);

    let newState = editorReducer(defaultEditorState, mouseMoveAction);

    expect(newState.mouse.currentPosition.x).toBe(6);
    expect(newState.mouse.currentPosition.y).toBe(7);
})

test('Clicking sets mouseDown to true', () => {
    let mouseDownAction = EditorActions.mouseDown();

    let newState = editorReducer(defaultEditorState, mouseDownAction);

    expect(newState.mouseDown).toBe(true);
})

test('Clicking down sets mouse start position', () => {
    let movedMouseState = {
        ...defaultEditorState,
        mouse: {
            currentPosition: {
                x: 6,
                y: 9
            }
        }
    };
    let mouseDownAction = EditorActions.mouseDown();

    let newState = editorReducer(movedMouseState, mouseDownAction);

    expect(newState.mouseStartX).toBe(6);
    expect(newState.mouseStartY).toBe(9);
})

test('Releasing sets mouseDown to false', () => {
    let mouseDownState = {
        ...defaultEditorState,
        mouseDown: true
    };
    let mouseUpAction = EditorActions.mouseUp();

    let newState = editorReducer(mouseDownState, mouseUpAction);

    expect(newState.mouseDown).toBe(false);
})
