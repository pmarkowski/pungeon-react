import EDITOR_ACTION_TYPE from "./editorActionType"

export const keyPressed = (key) => ({
    type: EDITOR_ACTION_TYPE.KEY_PRESSED,
    key
})

export const keyReleased = (key) => ({
    type: EDITOR_ACTION_TYPE.KEY_RELEASED,
    key
})

export const mouseDown = () => ({
    type: EDITOR_ACTION_TYPE.MOUSE_DOWN
})

export const mouseUp = () => ({
    type: EDITOR_ACTION_TYPE.MOUSE_UP
})

export const pngExported = () => ({
    type: EDITOR_ACTION_TYPE.PNG_EXPORTED
})

export const exportToPngClicked = () => ({
    type: EDITOR_ACTION_TYPE.EXPORT_TO_PNG_CLICKED
})

export const addObjectsToClipboard = (objects) => ({
    type: EDITOR_ACTION_TYPE.COPY_OBJECTS,
    objects: objects
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

export const scroll = (deltaX, deltaY, holdingCtrl) => ({
    type: EDITOR_ACTION_TYPE.SCROLL_EVENT,
    scrollX: deltaX,
    scrollY: deltaY,
    holdingCtrl: holdingCtrl
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

export const selectObject = (objectId, shouldMultiSelect) => ({
    type: EDITOR_ACTION_TYPE.SELECT_OBJECT,
    objectId,
    shouldMultiSelect
})

export const selectObjects = (objectIds, shouldMultiSelect) => ({
    type: EDITOR_ACTION_TYPE.SELECT_OBJECTS,
    objectIds,
    shouldMultiSelect
})

export const setScrollMovesViewport = (scrollMovesViewport) => ({
    type: EDITOR_ACTION_TYPE.SET_SCROLL_MOVES_VIEWPORT,
    scrollMovesViewport: scrollMovesViewport
})

export const setTheme = (theme) => ({
    type: EDITOR_ACTION_TYPE.SET_THEME,
    theme: theme
})

export const setCurrentMousePosition = (x, y) => ({
    type: EDITOR_ACTION_TYPE.SET_CURRENT_MOUSE_POSITION,
    x: x,
    y: y
})
