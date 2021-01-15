import { v4 as uuid } from 'uuid';
import DUNGEON_OBJECT_TYPE from "../dungeonObjects/dungeonObjectTypes";
import DUNGEON_ACTION_TYPE from "./dungeonActionType";

export const clearDungeon = () => ({
    type: DUNGEON_ACTION_TYPE.NEW_DUNGEON
})

export const addToken = (tokenTextureUrl, x, y, width, height, angle) => ({
    type: DUNGEON_ACTION_TYPE.ADD_OBJECT,
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
    type: DUNGEON_ACTION_TYPE.ADD_OBJECT,
    newObject: {
        id: uuid(),
        type: DUNGEON_OBJECT_TYPE.SPACE,
        points: positionArray,
    }
})

export const addLabel = (x, y, labelText) => ({
    type: DUNGEON_ACTION_TYPE.ADD_OBJECT,
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
    type: DUNGEON_ACTION_TYPE.ADD_OBJECT,
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
    type: DUNGEON_ACTION_TYPE.ADD_OBJECT,
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
    type: DUNGEON_ACTION_TYPE.ADD_OBJECT,
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

export const deleteObjects = (objectIds) => ({
    type: DUNGEON_ACTION_TYPE.DELETE_OBJECTS,
    objectIds
})

export const moveObjects = (selectedObjectIds, deltaX, deltaY) => ({
    type: DUNGEON_ACTION_TYPE.MOVE_SELECTED_OBJECT,
    selectedObjectIds,
    deltaX: deltaX,
    deltaY: deltaY
})

export const setSelectedObjectTextureUrl = (selectedObject, texturePath) => ({
    type: DUNGEON_ACTION_TYPE.SET_SELECTED_OBJECT_TEXTURE_PATH,
    selectedObject,
    texturePath: texturePath
})

export const setSelectedObjectLabel = (selectedObject, label) => ({
    type: DUNGEON_ACTION_TYPE.SET_SELECTED_OBJECT_LABEL,
    selectedObject,
    label: label
})

export const setSelectedObjectPosition = (selectedObject, x, y) => ({
    type: DUNGEON_ACTION_TYPE.SET_SELECTED_OBJECT_POSITION,
    selectedObject,
    x: x,
    y: y
})

export const setSelectedObjectSize = (selectedObject, width, height) => ({
    type: DUNGEON_ACTION_TYPE.SET_SELECTED_OBJECT_SIZE,
    selectedObject,
    width: width,
    height: height
})

export const setSelectedObjectStart = (selectedObject, x, y) => ({
    type: DUNGEON_ACTION_TYPE.SET_SELECTED_OBJECT_START,
    selectedObject,
    x: x,
    y: y
})

export const setSelectedObjectEnd = (selectedObject, x, y) => ({
    type: DUNGEON_ACTION_TYPE.SET_SELECTED_OBJECT_END,
    selectedObject,
    x: x,
    y: y
})

export const setSelectedObjectAngle = (selectedObject, angle) => ({
    type: DUNGEON_ACTION_TYPE.SET_SELECTED_OBJECT_ANGLE,
    selectedObject,
    angle: angle
})

export const setDungeonSize = (width, height) => ({
    type: DUNGEON_ACTION_TYPE.SET_DUNGEON_SIZE,
    width: width,
    height: height
})
