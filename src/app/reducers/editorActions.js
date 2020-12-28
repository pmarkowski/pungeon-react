import EDITOR_ACTION_TYPE from "./editorActionType"

export const pngExported = () => ({
    type: EDITOR_ACTION_TYPE.PNG_EXPORTED
})

export const exportToPngClicked = () => ({
    type: EDITOR_ACTION_TYPE.EXPORT_TO_PNG_CLICKED
})

export const clearOngoingSpacePolygonPoint = () => ({
    type: EDITOR_ACTION_TYPE.CLEAR_ONGOING_SPACE_POLYGON
})

export const addOngoingSpacePolygonPoint = (x, y) => ({
    type: EDITOR_ACTION_TYPE.ADD_ONGOING_SPACE_POLYGON,
    position: {
        x: x,
        y: y
    }
})

export const scroll = (wheelEvent) => ({
    type: EDITOR_ACTION_TYPE.SCROLL_EVENT,
    scrollX: wheelEvent.deltaX,
    scrollY: wheelEvent.deltaY,
    holdingCtrl: wheelEvent.getModifierState("Control")
})

export const moveViewport = (deltaX, deltaY) => ({
    type: EDITOR_ACTION_TYPE.MOVE_VIEWPORT,
    deltaX: deltaX,
    deltaY: deltaY
})

export const selectTool = (toolName) => ({
    type: EDITOR_ACTION_TYPE.SELECT_TOOL,
    selectedTool: toolName
})

export const selectObject = (objectId) => ({
    type: EDITOR_ACTION_TYPE.SELECT_OBJECT,
    objectId: objectId
})

export const setScrollMovesViewport = (scrollMovesViewport) => ({
    type: EDITOR_ACTION_TYPE.SET_SCROLL_MOVES_VIEWPORT,
    scrollMovesViewport: scrollMovesViewport
})

export const setMouseDungeonPosition = (x, y) => ({
    type: EDITOR_ACTION_TYPE.SET_MOUSE_DUNGEON_POSITION,
    x: x,
    y: y
})
