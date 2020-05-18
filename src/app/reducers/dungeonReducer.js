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

export const dungeonReducer = (state = {}, action) => {
    switch (action.type) {
        case 'MOUSE_DOWN':
            return {
                ...state,
                mouseDown: true,
                mouseStartX: action.x,
                mouseStartY: action.y
            };
        case 'MOUSE_UP':
            return {
                ...state,
                mouseDown: false
            };
        case 'MOVE_SELECTED_OBJECT':
            let arrayWithUpdatedObject = state.dungeon.spaces.map(space => {
                if (space.id === state.selectedObject) {
                    return {
                        ...space,
                        position: {
                            x: space.position.x + action.deltaX,
                            y: space.position.y + action.deltaY
                        }
                    };
                }
                else {
                    return space;
                }
            });
            return {
                ...state,
                dungeon: {
                    ...state.dungeon,
                    spaces: arrayWithUpdatedObject
                }
            };
        case 'ADD_SPACE':
            if (state.selectedTool === 'NewSpace') {
                let spaceArray = state.dungeon.spaces.slice();
                spaceArray = [...spaceArray, action.newSpace];
                return {
                    ...state,
                    dungeon: {
                        ...state.dungeon,
                        spaces: spaceArray
                    }
                };
            }
            else {
                return state;
            }
        case 'SELECT_TOOL':
            let selectedObject = state.selectedObject;
            if (action.selectedTool !== 'Select') {
                selectedObject = null;
            }
            return {
                ...state,
                selectedTool: action.selectedTool,
                selectedObject: selectedObject
            };
        case 'SELECT_OBJECT':
            if (state.selectedTool === 'Select') {
                return {
                    ...state,
                    selectedObject: action.objectId
                };
            }
            else {
                return state;
            }
        case 'DELETE_OBJECT':
            let selectedObjectId = state.selectedObject;
            if (selectedObjectId) {
                let newSpaceArray = state.dungeon.spaces.filter(space => space.id !== selectedObjectId);
                return {
                    ...state,
                    selectedObject: null,
                    dungeon: {
                        ...state.dungeon,
                        spaces: newSpaceArray
                    }
                }
            }
            else {
                return state;   
            }
        default:
            return state
    }
};

export default dungeonReducer
