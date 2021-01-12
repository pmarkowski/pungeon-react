import TOOL_TYPE from "../tools/toolType";
import { deleteObjects } from "./dungeonActions";
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
        selectedObjectIds: ['beep-boop']
    };
    let changeToolAction = EditorActions.selectTool(TOOL_TYPE.NEW_TOKEN);

    let newState = editorReducer(nonSelectToolState, changeToolAction);

    expect(newState.selectedObjectIds).toHaveLength(0);
})

test('Selecting select tool does not clear selected object', () => {
    const selectedObjectId = 'beep-boop';
    let nonSelectToolState = {
        ...defaultEditorState,
        selectedTool: TOOL_TYPE.SELECT,
        selectedObjectIds: [selectedObjectId]
    };
    let changeToolAction = EditorActions.selectTool(TOOL_TYPE.SELECT);

    let newState = editorReducer(nonSelectToolState, changeToolAction);

    expect(newState.selectedObjectIds).toContain(selectedObjectId);
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

test('Deleting an object clears selected objects', () => {
    let selectedObjectIds = [
        'object1',
        'object2'
    ];
    let selectedObjectState = {
        ...defaultEditorState,
        selectedObjectIds
    };
    let deleteAction = deleteObjects(selectedObjectIds);

    let newState = editorReducer(selectedObjectState, deleteAction);

    expect(newState.selectedObjectIds).toHaveLength(0);
})

test('Selecting a single object sets selectedObjectIds', () => {
    let selectObjectAction = EditorActions.selectObject('object1', false);

    let newState = editorReducer(defaultEditorState, selectObjectAction);

    expect(newState.selectedObjectIds).toHaveLength(1);
    expect(newState.selectedObjectIds).toContain('object1');
})

test('Selecting a single object overwrites current selection', () => {
    let selectedObjectState = {
        ...defaultEditorState,
        selectedObjectIds: [
            'selection'
        ]
    };
    let selectObjectAction = EditorActions.selectObject('object1', false);

    let newState = editorReducer(selectedObjectState, selectObjectAction);

    expect(newState.selectedObjectIds).toHaveLength(1);
    expect(newState.selectedObjectIds).toContain('object1');
})

test('Selecting a single object while multiselecting appends to empty selection', () => {
    let selectObjectAction = EditorActions.selectObject('object1', true);

    let newState = editorReducer(defaultEditorState, selectObjectAction);

    expect(newState.selectedObjectIds).toHaveLength(1);
    expect(newState.selectedObjectIds).toContain('object1');
})

test('Selecting a single object while multiselecting appends to current selection', () => {
    let selectedObjectState = {
        ...defaultEditorState,
        selectedObjectIds: [
            'selection'
        ]
    };
    let selectObjectAction = EditorActions.selectObject('object1', true);

    let newState = editorReducer(selectedObjectState, selectObjectAction);

    expect(newState.selectedObjectIds).toHaveLength(2);
    expect(newState.selectedObjectIds).toContain('selection', 'object1');
})

test('Selecting an already selected object while multiselecting deselects it', () => {
    let selectedObjectState = {
        ...defaultEditorState,
        selectedObjectIds: [
            'object1',
            'object2'
        ]
    };
    let selectObjectAction = EditorActions.selectObject('object1', true);

    let newState = editorReducer(selectedObjectState, selectObjectAction);

    expect(newState.selectedObjectIds).toHaveLength(1);
    expect(newState.selectedObjectIds).not.toContain('object1');
    expect(newState.selectedObjectIds).toContain('object2');
})

test('Selecting multiple objects replaces current selection', () => {
    let selectedObjectState = {
        ...defaultEditorState,
        selectedObjectIds: [
            'object1',
            'object2'
        ]
    };

    let newSelectedObjects = [
        'object3',
        'object4'
    ]
    let selectObjectAction = EditorActions.selectObjects(newSelectedObjects, false);

    let newState = editorReducer(selectedObjectState, selectObjectAction);

    expect(newState.selectedObjectIds).toHaveLength(2);
    expect(newState.selectedObjectIds).toBe(newSelectedObjects);
})

test('Selecting multiple objects while multiselecting appends selection to current selection', () => {
    let selectedObjectState = {
        ...defaultEditorState,
        selectedObjectIds: [
            'object1',
            'object2'
        ]
    };

    let newSelectedObjects = [
        'object3',
        'object4'
    ]
    let selectObjectAction = EditorActions.selectObjects(newSelectedObjects, true);

    let newState = editorReducer(selectedObjectState, selectObjectAction);

    expect(newState.selectedObjectIds).toHaveLength(4);
    expect(newState.selectedObjectIds).toContain(
        ...selectedObjectState.selectedObjectIds,
        ...newSelectedObjects);
})

test('Selecting the same objects while multiselecting keeps them selected', () => {
    let selectedObjectState = {
        ...defaultEditorState,
        selectedObjectIds: [
            'object1',
            'object2'
        ]
    };

    let newSelectedObjects = [
        'object1',
        'object2'
    ]
    let selectObjectAction = EditorActions.selectObjects(newSelectedObjects, true);

    let newState = editorReducer(selectedObjectState, selectObjectAction);

    expect(newState.selectedObjectIds).toHaveLength(2);
    expect(newState.selectedObjectIds).toContain(
        ...selectedObjectState.selectedObjectIds);
})
