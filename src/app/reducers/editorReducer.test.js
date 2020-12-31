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
    const minScale = 10;
    let minimumScrollState = {
        ...defaultEditorState,
        scale: minScale
    };
    let scrollDownAction = EditorActions.scroll(0, 1, false);

    let newState = editorReducer(minimumScrollState, scrollDownAction);

    expect(newState.scale).toBe(minScale);
})

test('Scrolling up does not increase scale above 200', () => {
    const maxScale = 200;
    let minimumScrollState = {
        ...defaultEditorState,
        scale: maxScale
    };
    let scrollUpAction = EditorActions.scroll(0, -1, false);

    let newState = editorReducer(minimumScrollState, scrollUpAction);

    expect(newState.scale).toBe(maxScale);
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
    const selectedObjectId = 'beep-boop';
    let nonSelectToolState = {
        ...defaultEditorState,
        selectedTool: TOOL_TYPE.SELECT,
        selectedObject: selectedObjectId
    };
    let changeToolAction = EditorActions.selectTool(TOOL_TYPE.SELECT);

    let newState = editorReducer(nonSelectToolState, changeToolAction);

    expect(newState.selectedObject).toBe(selectedObjectId);
})

test('Moving mouse sets mouse position', () => {
    const x = 6;
    const y = 7;
    let mouseMoveAction = EditorActions.setCurrentMousePosition(x, y);

    let newState = editorReducer(defaultEditorState, mouseMoveAction);

    expect(newState.mouse.currentPosition.x).toBe(x);
    expect(newState.mouse.currentPosition.y).toBe(y);
})

test('Clicking sets mouseDown to true', () => {
    let mouseDownAction = EditorActions.mouseDown();

    let newState = editorReducer(defaultEditorState, mouseDownAction);

    expect(newState.mouse.mouseDown).toBe(true);
})

test('Clicking down sets mouse start position', () => {
    const x = 6;
    const y = 9;
    let movedMouseState = {
        ...defaultEditorState,
        mouse: {
            currentPosition: {
                x: x,
                y: y
            }
        }
    };
    let mouseDownAction = EditorActions.mouseDown();

    let newState = editorReducer(movedMouseState, mouseDownAction);

    expect(newState.mouse.startPosition.x).toBe(x);
    expect(newState.mouse.startPosition.y).toBe(y);
})

test('Releasing sets mouseDown to false', () => {
    let mouseDownState = {
        ...defaultEditorState,
        mouse: {
            ...defaultEditorState.mouse,
            mouseDown: true
        }
    };
    let mouseUpAction = EditorActions.mouseUp();

    let newState = editorReducer(mouseDownState, mouseUpAction);

    expect(newState.mouse.mouseDown).toBe(false);
})
