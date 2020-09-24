import { createArrayWithUpdatedObject } from '../utils/createArrayWithUpdatedObject'
import TOOL_TYPE from '../tools/toolType'
import DUNGEON_OBJECT_TYPE from '../utils/dungeonObjectTypes';
import { v4 as uuid } from 'uuid';

export const clearOngoingSpacePolygonPoint = () => ({
    type: 'CLEAR_ONGOING_SPACE_POLYGON'
})

export const addToken = (tokenTextureUrl, x, y, width, height, angle) => ({
    type: 'ADD_OBJECT',
    newObject: {
        id: uuid(),
        type: DUNGEON_OBJECT_TYPE.TOKEN,
        textureUrl: tokenTextureUrl,
        position: {
            x: x,
            y: y
        },
        size: {
            width: width,
            height: height
        },
        angle: angle
    }
})

export const addSpacePolygon = (positionArray) => ({
    type: 'ADD_OBJECT',
    newObject: {
        id: uuid(),
        type: DUNGEON_OBJECT_TYPE.SPACE,
        points: positionArray,
    }
})

export const addOngoingSpacePolygonPoint = (x, y) => ({
    type: 'ADD_ONGOING_SPACE_POLYGON',
    position: {
        x: x,
        y: y
    }
})

export const addLabel = (x, y, labelText) => ({
    type: 'ADD_OBJECT',
    newObject: {
        id: uuid(),
        type: DUNGEON_OBJECT_TYPE.LABEL,
        position: {
            x: x,
            y: y
        },
        label: labelText
    }
})

export const addDoor = (startX, startY, endX, endY) => ({
    type: 'ADD_OBJECT',
    newObject: {
        id: uuid(),
        type: DUNGEON_OBJECT_TYPE.DOOR,
        start: {
            x: startX,
            y: startY
        },
        end: {
            x: endX,
            y: endY
        }
    }
});

export const addWall = (startX, startY, endX, endY) => ({
    type: 'ADD_OBJECT',
    newObject: {
        id: uuid(),
        type: DUNGEON_OBJECT_TYPE.WALL,
        start: {
            x: startX,
            y: startY
        },
        end: {
            x: endX,
            y: endY
        }
    }
});

export const addSpace = (startX, startY, endX, endY) => ({
    type: 'ADD_OBJECT',
    newObject: {
        id: uuid(),
        type: DUNGEON_OBJECT_TYPE.SPACE,
        position: {
            x: startX,
            y: startY
        },
        size: {
            width: endX - startX,
            height: endY - startY
        }
    }
});

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

export const setSelectedObjectTextureUrl = (texturePath) => ({
    type: 'SET_SELECTED_OBJECT_TEXTURE_PATH',
    texturePath: texturePath
})

export const setSelectedObjectLabel = (label) => ({
    type: 'SET_SELECTED_OBJECT_LABEL',
    label: label
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

export const setSelectedObjectAngle = (angle) => ({
    type: 'SET_SELECTED_OBJECT_ANGLE',
    angle: angle
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
        case 'CLEAR_ONGOING_SPACE_POLYGON': {
            return {
                ...state,
                editor: {
                    ...state.editor,
                    ongoingSpacePolygon: null
                }
            }
        }
        case 'ADD_ONGOING_SPACE_POLYGON': {
            let newPolygonArray = [...(state.editor.ongoingSpacePolygon ?? []), action.position]
            return {
                ...state,
                editor: {
                    ...state.editor,
                    ongoingSpacePolygon: newPolygonArray
                }
            }
        }
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
        case 'SET_SELECTED_OBJECT_TEXTURE_PATH': {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.dungeon.objects,
                state.selectedObject,
                (object) => object.textureUrl = action.texturePath);
            return {
                ...state,
                dungeon: {
                    ...state.dungeon,
                    objects: arrayWithUpdatedObject
                }
            };
        }
        case 'SET_SELECTED_OBJECT_ANGLE': {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.dungeon.objects,
                state.selectedObject,
                (object) => object.angle = action.angle);
            return {
                ...state,
                dungeon: {
                    ...state.dungeon,
                    objects: arrayWithUpdatedObject
                }
            };
        }
        case 'SET_SELECTED_OBJECT_LABEL': {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.dungeon.objects,
                state.selectedObject,
                (object) => object.label = action.label);
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
            return {
                ...state,
                selectedObject: action.objectId
            };
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
