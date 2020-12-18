import { createArrayWithUpdatedObject } from '../utils/createArrayWithUpdatedObject'
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

export const deleteSelectedObject = (selectedObject) => ({
    type: 'DELETE_OBJECT',
    selectedObject
})

export const moveSelectedObject = (selectedObject, deltaX, deltaY) => ({
    type: 'MOVE_SELECTED_OBJECT',
    selectedObject,
    deltaX: deltaX,
    deltaY: deltaY
})

export const setSelectedObjectTextureUrl = (selectedObject, texturePath) => ({
    type: 'SET_SELECTED_OBJECT_TEXTURE_PATH',
    selectedObject,
    texturePath: texturePath
})

export const setSelectedObjectLabel = (selectedObject, label) => ({
    type: 'SET_SELECTED_OBJECT_LABEL',
    selectedObject,
    label: label
})

export const setSelectedObjectPosition = (selectedObject, x, y) => ({
    type: 'SET_SELECTED_OBJECT_POSITION',
    selectedObject,
    x: x,
    y: y
})

export const setSelectedObjectSize = (selectedObject, width, height) => ({
    type: 'SET_SELECTED_OBJECT_SIZE',
    selectedObject,
    width: width,
    height: height
})

export const setSelectedObjectStart = (selectedObject, x, y) => ({
    type: 'SET_SELECTED_OBJECT_START',
    selectedObject,
    x: x,
    y: y
})

export const setSelectedObjectEnd = (selectedObject, x, y) => ({
    type: 'SET_SELECTED_OBJECT_END',
    selectedObject,
    x: x,
    y: y
})

export const setSelectedObjectAngle = (selectedObject, angle) => ({
    type: 'SET_SELECTED_OBJECT_ANGLE',
    selectedObject,
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
        case 'SET_DUNGEON_SIZE': {
            return {
                ...state,
                size: {
                    width: action.width,
                    height: action.height
                }
            }
        }
        case 'MOVE_SELECTED_OBJECT': {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.objects,
                action.selectedObject,
                (object) => object.position = {
                    x: object.position.x + action.deltaX,
                    y: object.position.y + action.deltaY
                });
            return {
                ...state,
                objects: arrayWithUpdatedObject
            };
        }
        case 'SET_SELECTED_OBJECT_TEXTURE_PATH': {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.objects,
                action.selectedObject,
                (object) => object.textureUrl = action.texturePath);
            return {
                ...state,
                objects: arrayWithUpdatedObject
            };
        }
        case 'SET_SELECTED_OBJECT_ANGLE': {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.objects,
                action.selectedObject,
                (object) => object.angle = action.angle);
            return {
                ...state,
                objects: arrayWithUpdatedObject
            };
        }
        case 'SET_SELECTED_OBJECT_LABEL': {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.objects,
                action.selectedObject,
                (object) => object.label = action.label);
            return {
                ...state,
                objects: arrayWithUpdatedObject
            };
        }
        case 'SET_SELECTED_OBJECT_POSITION': {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.objects,
                action.selectedObject,
                (object) => object.position = {
                    x: action.x,
                    y: action.y
                });
            return {
                ...state,
                objects: arrayWithUpdatedObject
            };
        }
        case 'SET_SELECTED_OBJECT_SIZE': {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.objects,
                action.selectedObject,
                (object) => object.size = {
                    width: action.width,
                    height: action.height
                });
            return {
                ...state,
                objects: arrayWithUpdatedObject
            };
        }
        case 'SET_SELECTED_OBJECT_START': {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.objects,
                action.selectedObject,
                (object) => object.start = {
                    x: action.x,
                    y: action.y
                });
            return {
                ...state,
                objects: arrayWithUpdatedObject
            };
        }
        case 'SET_SELECTED_OBJECT_END': {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.objects,
                action.selectedObject,
                (object) => object.end = {
                    x: action.x,
                    y: action.y
                });
            return {
                ...state,
                objects: arrayWithUpdatedObject,
            };

        }
        case 'ADD_OBJECT': {
            let objectArray = state.objects.slice();
            objectArray = [...objectArray, action.newObject];
            return {
                ...state,
                objects: objectArray
            };
        }
        case 'DELETE_OBJECT': {
            let selectedObjectId = action.selectedObject;
            if (selectedObjectId) {
                let newObjectArray = state.objects
                    .filter(object => object.id !== selectedObjectId);
                return {
                    ...state,
                    objects: newObjectArray
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
