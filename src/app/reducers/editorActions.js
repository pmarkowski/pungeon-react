export const pngExported = () => ({
    type: 'PNG_EXPORTED'
})

export const exportToPngClicked = () => ({
    type: 'EXPORT_TO_PNG_CLICKED'
})

export const clearOngoingSpacePolygonPoint = () => ({
    type: 'CLEAR_ONGOING_SPACE_POLYGON'
})

export const addOngoingSpacePolygonPoint = (x, y) => ({
    type: 'ADD_ONGOING_SPACE_POLYGON',
    position: {
        x: x,
        y: y
    }
})

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

export const setScrollMovesViewport = (scrollMovesViewport) => ({
    type: 'SET_SCROLL_MOVES_VIEWPORT',
    scrollMovesViewport: scrollMovesViewport
})

export const setMouseDungeonPosition = (x, y) => ({
    type: 'SET_MOUSE_DUNGEON_POSITION',
    x: x,
    y: y
})
