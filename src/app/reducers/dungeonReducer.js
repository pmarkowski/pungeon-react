import { createArrayWithUpdatedObject } from '../utils/createArrayWithUpdatedObject'
import TOOL_TYPE from '../utils/toolType'

export const scroll = (wheelEvent) => ({
    type: 'SCROLL_EVENT',
    scrollX: wheelEvent.deltaX,
    scrollY: wheelEvent.deltaY,
    holdingCtrl: wheelEvent.getModifierState("Control")
})

export const moveViewport = (deltaX, deltaY) => ({
    type: 'MOVE_VIEWPORT',
    deltaX: deltaX,
    deltaY: deltaY
})

export const selectTool = (toolName) => ({
    type: 'SELECT_TOOL',
    selectedTool: toolName
})

export const selectObject = (objectId) => ({
    type: 'SELECT_OBJECT',
    objectId: objectId
})

export const deleteSelectedObject = () => ({
    type: 'DELETE_OBJECT'
})

export const moveSelectedObject = (deltaX, deltaY) => ({
    type: 'MOVE_SELECTED_OBJECT',
    deltaX: deltaX,
    deltaY: deltaY
})

export const setSelectedObjectPosition = (x, y) => ({
    type: 'SET_SELECTED_OBJECT_POSITION',
    x: x,
    y: y
})

export const setSelectedObjectSize = (width, height) => ({
    type: 'SET_SELECTED_OBJECT_SIZE',
    width: width,
    height: height
})

export const setSelectedObjectStart = (x, y) => ({
    type: 'SET_SELECTED_OBJECT_START',
    x: x,
    y: y
})

export const setSelectedObjectEnd = (x, y) => ({
    type: 'SET_SELECTED_OBJECT_END',
    x: x,
    y: y
})

export const setDungeonSize = (width, height) => ({
    type: 'SET_DUNGEON_SIZE',
    width: width,
    height: height
})

export const setScrollMovesViewport = (scrollMovesViewport) => ({
    type: 'SET_SCROLL_MOVES_VIEWPORT',
    scrollMovesViewport: scrollMovesViewport
})

export const setMouseDungeonPosition = (x, y) => ({
    type: 'SET_MOUSE_DUNGEON_POSITION',
    x: x,
    y: y
})

export const dungeonReducer = (state = {}, action) => {
    switch (action.type) {
        case 'MOVE_VIEWPORT': {
            return {
                ...state,
                editor: {
                    ...state.editor,
                    position: {
                        x: state.editor.position.x + action.deltaX,
                        y: state.editor.position.y + action.deltaY
                    }
                }
            }
        }
        case 'SET_MOUSE_DUNGEON_POSITION': {
            return {
                ...state,
                editor: {
                    ...state.editor,
                    mouse: {
                        ...state.editor.mouse,
                        dungeonPosition: {
                            x: action.x,
                            y: action.y
                        }
                    }
                }
            }
        }
        case 'SCROLL_EVENT': {
            if (!state.scrollMovesViewport || action.holdingCtrl) {
                let scaleDelta = 0.1
                if (action.scrollY > 0) {
                    scaleDelta *= -1
                }
                let newScale = Math.min(Math.max(state.editor.scale + scaleDelta, 0.1), 2)
                if (state.editor.scale !== newScale) {
                    return {
                        ...state,
                        editor: {
                            ...state.editor,
                            scale: newScale,
                            position: {
                                x: state.editor.position.x - (state.editor.mouse.dungeonPosition.x * scaleDelta),
                                y: state.editor.position.y - (state.editor.mouse.dungeonPosition.y * scaleDelta),
                            }
                        }
                    };
                }
                else {
                    return state;
                }
            }
            else {
                let scaleDelta = 0.5;
                return {
                    ...state,
                    editor: {
                        ...state.editor,
                        position: {
                           x: state.editor.position.x - action.scrollX * scaleDelta,
                           y: state.editor.position.y - action.scrollY * scaleDelta
                        }
                    }
                };
            }
        }
        case 'MOUSE_DOWN': {
            return {
                ...state,
                mouseDown: true,
                mouseStartX: state.editor.mouse.dungeonPosition.x,
                mouseStartY: state.editor.mouse.dungeonPosition.y
            };
        }
        case 'MOUSE_UP': {
            return {
                ...state,
                mouseDown: false
            };
        }
        case 'SET_DUNGEON_SIZE': {
            return {
                ...state,
                dungeon: {
                    ...state.dungeon,
                    size: {
                        width: action.width,
                        height: action.height
                    }
                }
            }
        }
        case 'SET_SCROLL_MOVES_VIEWPORT': {
            return {
                ...state,
                scrollMovesViewport: action.scrollMovesViewport
            }
        }
        case 'MOVE_SELECTED_OBJECT': {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.dungeon.objects,
                state.selectedObject,
                (object) => object.position = {
                    x: object.position.x + action.deltaX,
                    y: object.position.y + action.deltaY
                });
            return {
                ...state,
                dungeon: {
                    ...state.dungeon,
                    objects: arrayWithUpdatedObject
                }
            };
        }
        case 'SET_SELECTED_OBJECT_POSITION': {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.dungeon.objects,
                state.selectedObject,
                (object) => object.position = {
                    x: action.x,
                    y: action.y
                });
            return {
                ...state,
                dungeon: {
                    ...state.dungeon,
                    objects: arrayWithUpdatedObject
                }
            };
        }
        case 'SET_SELECTED_OBJECT_SIZE': {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.dungeon.objects,
                state.selectedObject,
                (object) => object.size = {
                    width: action.width,
                    height: action.height
                });
            return {
                ...state,
                dungeon: {
                    ...state.dungeon,
                    objects: arrayWithUpdatedObject
                }
            };
        }
        case 'SET_SELECTED_OBJECT_START': {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.dungeon.objects,
                state.selectedObject,
                (object) => object.start = {
                    x: action.x,
                    y: action.y
                });
            return {
                ...state,
                dungeon: {
                    ...state.dungeon,
                    objects: arrayWithUpdatedObject
                }
            };
        }
        case 'SET_SELECTED_OBJECT_END': {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.dungeon.objects,
                state.selectedObject,
                (object) => object.end = {
                    x: action.x,
                    y: action.y
                });
            return {
                ...state,
                dungeon: {
                    ...state.dungeon,
                    objects: arrayWithUpdatedObject,
                }
            };

        }
        case 'ADD_OBJECT': {
            let objectArray = state.dungeon.objects.slice();
            objectArray = [...objectArray, action.newObject];
            return {
                ...state,
                dungeon: {
                    ...state.dungeon,
                    objects: objectArray
                }
            };
        }
        case 'SELECT_TOOL': {
            let selectedObject = state.selectedObject;
            if (action.selectedTool !== TOOL_TYPE.SELECT) {
                selectedObject = null;
            }
            return {
                ...state,
                selectedTool: action.selectedTool,
                selectedObject: selectedObject
            };
        }
        case 'SELECT_OBJECT': {
            if (state.selectedTool === TOOL_TYPE.SELECT) {
                return {
                    ...state,
                    selectedObject: action.objectId
                };
            }
            else {
                return state;
            }
        }
        case 'DELETE_OBJECT': {
            let selectedObjectId = state.selectedObject;
            if (selectedObjectId) {
                let newObjectArray = state.dungeon.objects
                    .filter(object => object.id !== selectedObjectId);
                return {
                    ...state,
                    selectedObject: null,
                    dungeon: {
                        ...state.dungeon,
                        objects: newObjectArray
                    }
                }
            }
            else {
                return state;   
            }
        }
        default:
            return state
    }
};

export default dungeonReducer
