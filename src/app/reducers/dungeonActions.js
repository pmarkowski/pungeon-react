import DUNGEON_ACTION_TYPE from "./dungeonActionType";

export const clearDungeon = () => ({
    type: DUNGEON_ACTION_TYPE.NEW_DUNGEON
})

export const setDungeonName = (dungeonName) => ({
    type: DUNGEON_ACTION_TYPE.SET_DUNGEON_NAME,
    name: dungeonName
})

export const addObjects = (objects) => ({
    type: DUNGEON_ACTION_TYPE.ADD_OBJECTS,
    newObjects: objects
})

/**
 * @param {import('../dungeonObjects/DungeonObjectOperations').DungeonObject} object
 */
export const addObject = (object) => addObjects([object])

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

export const setPointPosition = (pointId, position) => ({
    type: DUNGEON_ACTION_TYPE.SET_POINT_POSITION,
    pointId,
    position
})
