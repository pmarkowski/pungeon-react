import TOOL_TYPE from "../tools/toolType";

export const editorReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PNG_EXPORTED': {
            return {
                ...state,
                exportToPngClicked: null
            }
        }
        case 'EXPORT_TO_PNG_CLICKED': {
            return {
                ...state,
                exportToPngClicked: true
            }
        }
        case 'CLEAR_ONGOING_SPACE_POLYGON': {
            return {
                ...state,
                ongoingSpacePolygon: null
            }
        }
        case 'ADD_ONGOING_SPACE_POLYGON': {
            let newPolygonArray = [...(state.ongoingSpacePolygon ?? []), action.position]
            return {
                ...state,
                ongoingSpacePolygon: newPolygonArray
            }
        }
        case 'MOVE_VIEWPORT': {
            return {
                ...state,
                position: {
                    x: state.position.x + action.deltaX,
                    y: state.position.y + action.deltaY
                }
            }
        }
        case 'SET_MOUSE_DUNGEON_POSITION': {
            return {
                ...state,
                mouse: {
                    ...state.mouse,
                    dungeonPosition: {
                        x: action.x,
                        y: action.y
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
                let newScale = Math.min(Math.max(state.scale + scaleDelta, 0.1), 2)
                if (state.scale !== newScale) {
                    return {
                        ...state,
                        scale: newScale,
                        position: {
                            x: state.position.x - (state.mouse.dungeonPosition.x * scaleDelta),
                            y: state.position.y - (state.mouse.dungeonPosition.y * scaleDelta),
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
                    position: {
                        x: state.position.x - action.scrollX * scaleDelta,
                        y: state.position.y - action.scrollY * scaleDelta
                    }
                };
            }
        }
        case 'MOUSE_DOWN': {
            return {
                ...state,
                mouseDown: true,
                mouseStartX: state.mouse.dungeonPosition.x,
                mouseStartY: state.mouse.dungeonPosition.y
            };
        }
        case 'MOUSE_UP': {
            return {
                ...state,
                mouseDown: false
            };
        }
        case 'SET_SCROLL_MOVES_VIEWPORT': {
            return {
                ...state,
                scrollMovesViewport: action.scrollMovesViewport
            }
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
            return {
                ...state,
                selectedObject: null
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}
