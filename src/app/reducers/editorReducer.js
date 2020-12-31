import TOOL_TYPE from "../tools/toolType";
import EDITOR_ACTION_TYPE from "./editorActionType";

export const defaultEditorState = {
    scrollMovesViewport: false,
    selectedTool: TOOL_TYPE.NEW_SPACE_RECTANGLE,
    scale: 100,
    position: {
        x: 0,
        y: 0
    },
    mouse: {
        mouseDown: false,
        startPosition: {
            x: 0,
            y: 0
        },
        currentPosition: {
            x: 0,
            y: 0
        }
    }
};

export const editorReducer = (state = defaultEditorState, action) => {
    switch (action.type) {
        case EDITOR_ACTION_TYPE.PNG_EXPORTED: {
            return {
                ...state,
                exportToPngClicked: null
            }
        }
        case EDITOR_ACTION_TYPE.EXPORT_TO_PNG_CLICKED: {
            return {
                ...state,
                exportToPngClicked: true
            }
        }
        case EDITOR_ACTION_TYPE.CLEAR_ONGOING_SPACE_POLYGON: {
            return {
                ...state,
                ongoingSpacePolygon: null
            }
        }
        case EDITOR_ACTION_TYPE.ADD_ONGOING_SPACE_POLYGON: {
            let newPolygonArray = [...(state.ongoingSpacePolygon ?? []), action.position]
            return {
                ...state,
                ongoingSpacePolygon: newPolygonArray
            }
        }
        case EDITOR_ACTION_TYPE.MOVE_VIEWPORT: {
            return {
                ...state,
                position: {
                    x: state.position.x + action.deltaX,
                    y: state.position.y + action.deltaY
                }
            }
        }
        case EDITOR_ACTION_TYPE.SET_CURRENT_MOUSE_POSITION: {
            return {
                ...state,
                mouse: {
                    ...state.mouse,
                    currentPosition: {
                        x: action.x,
                        y: action.y
                    }
                }
            }
        }
        case EDITOR_ACTION_TYPE.SCROLL_EVENT: {
            if (!state.scrollMovesViewport || action.holdingCtrl) {
                let scaleDelta = 10
                if (action.scrollY > 0) {
                    scaleDelta *= -1
                }
                let minimumScale = 10;
                let maximumScale = 200;
                let newScale = Math.min(Math.max(state.scale + scaleDelta, minimumScale), maximumScale)
                if (state.scale !== newScale) {
                    return {
                        ...state,
                        scale: newScale,
                        position: {
                            x: state.position.x - (state.mouse.currentPosition.x * (scaleDelta / 100)),
                            y: state.position.y - (state.mouse.currentPosition.y * (scaleDelta / 100)),
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
        case EDITOR_ACTION_TYPE.MOUSE_DOWN: {
            return {
                ...state,
                mouse: {
                    ...state.mouse,
                    mouseDown: true,
                    startPosition: {
                      x: state.mouse.currentPosition.x,
                      y: state.mouse.currentPosition.y
                    }
                }
            };
        }
        case EDITOR_ACTION_TYPE.MOUSE_UP: {
            return {
                ...state,
                mouse: {
                    ...state.mouse,
                    mouseDown: false
                }
            };
        }
        case EDITOR_ACTION_TYPE.SET_SCROLL_MOVES_VIEWPORT: {
            return {
                ...state,
                scrollMovesViewport: action.scrollMovesViewport
            }
        }
        case EDITOR_ACTION_TYPE.SELECT_TOOL: {
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
        case EDITOR_ACTION_TYPE.SELECT_OBJECT: {
            return {
                ...state,
                selectedObject: action.objectId
            };
        }
        case EDITOR_ACTION_TYPE.DELETE_OBJECT: {
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
