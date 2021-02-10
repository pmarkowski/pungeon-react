import TOOL_TYPE from "../tools/toolType";
import DUNGEON_ACTION_TYPE from "./dungeonActionType";
import EDITOR_ACTION_TYPE from "./editorActionType";

/**
 * @typedef {defaultEditorState} EditorState
 */
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
    },
    keyboard: {
        heldKeys: {}
    },
    /** @type {string[]} */
    selectedObjectIds: [],
    /** @type {?{x: number, y: number, shouldMultiSelect: boolean}} */
    selectingAtPoint: null,
    /** @type {?{x: number, y: number, width: number, height: number, shouldMultiSelect: boolean}} */
    selectingInBoundingBox: null
};

/**
 * @returns {EditorState}
 */
export const editorReducer = (state = defaultEditorState, action) => {
    switch (action.type) {
        case EDITOR_ACTION_TYPE.KEY_PRESSED: {
            let newHeldKeys = {...state.keyboard.heldKeys};
            newHeldKeys[action.key] = true;
            return {
                ...state,
                keyboard: {
                    ...state.keyboard,
                    heldKeys: newHeldKeys
                }
            }
        }
        case EDITOR_ACTION_TYPE.KEY_RELEASED: {
            let newHeldKeys = {...state.keyboard.heldKeys};
            delete newHeldKeys[action.key];
            return {
                ...state,
                keyboard: {
                    ...state.keyboard,
                    heldKeys: newHeldKeys
                }
            }
        }
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
            let newSelectedObjectIds = state.selectedObjectIds;
            if (action.selectedTool !== TOOL_TYPE.SELECT) {
                newSelectedObjectIds = [];
            }
            return {
                ...state,
                selectedTool: action.selectedTool,
                selectedObjectIds: newSelectedObjectIds
            };
        }
        case EDITOR_ACTION_TYPE.SELECT_OBJECT: {
            let newSelectedObjectIds;
            if (action.shouldMultiSelect && state.selectedObjectIds.includes(action.objectId)) {
                newSelectedObjectIds = state.selectedObjectIds.filter(objectId => objectId !== action.objectId);
            }
            else if (action.shouldMultiSelect) {
                newSelectedObjectIds = [...state.selectedObjectIds, action.objectId];
            }
            else {
                newSelectedObjectIds = [action.objectId];
            }
            return {
                ...state,
                selectedObjectIds: newSelectedObjectIds,
                selectingAtPoint: null,
                selectingInBoundingBox: null
            }
        }
        case EDITOR_ACTION_TYPE.SELECT_OBJECTS: {
            let newSelectedObjectIds;
            if (action.shouldMultiSelect) {
                newSelectedObjectIds = [...new Set([...state.selectedObjectIds, ...action.objectIds])];
            }
            else {
                newSelectedObjectIds = action.objectIds;
            }
            return {
                ...state,
                selectedObjectIds: newSelectedObjectIds,
                selectingAtPoint: null,
                selectingInBoundingBox: null
            };
        }
        case DUNGEON_ACTION_TYPE.DELETE_OBJECTS: {
            return {
                ...state,
                selectedObjectIds: []
            }
        }
        case DUNGEON_ACTION_TYPE.ADD_OBJECT: {
            return {
                ...state,
                selectedObjectIds: [action.newObject.id]
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}
