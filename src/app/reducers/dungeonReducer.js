export const selectTool = (toolName) => ({
    type: 'SELECT_TOOL',
    selectedTool: toolName
})

export const selectObject = (objectId) => ({
    type: 'SELECT_OBJECT',
    objectId: objectId
})

export const dungeonReducer = (state = {}, action) => {
    switch (action.type) {
        case 'TOGGLE_MOVE_Y':
            return {
                ...state,
                moveY: !state.moveY
            };
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
            return {
                ...state,
                selectedTool: action.selectedTool
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
        default:
            return state
    }
};

export default dungeonReducer
