import { createArrayWithUpdatedObject } from '../utils/createArrayWithUpdatedObject'

export const dungeonReducer = (state = {}, action) => {
    switch (action.type) {
        case 'NEW_DUNGEON': {
            return {
                size: {
                    width: 24,
                    height: 32
                },
                objects: []
            }
        }
        case 'SET_DUNGEON_SIZE': {
            return {
                ...state,
                size: {
                    width: action.width,
                    height: action.height
                }
            }
        }
        case 'MOVE_SELECTED_OBJECT': {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.objects,
                action.selectedObject,
                (object) => object.position = {
                    x: object.position.x + action.deltaX,
                    y: object.position.y + action.deltaY
                });
            return {
                ...state,
                objects: arrayWithUpdatedObject
            };
        }
        case 'SET_SELECTED_OBJECT_TEXTURE_PATH': {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.objects,
                action.selectedObject,
                (object) => object.textureUrl = action.texturePath);
            return {
                ...state,
                objects: arrayWithUpdatedObject
            };
        }
        case 'SET_SELECTED_OBJECT_ANGLE': {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.objects,
                action.selectedObject,
                (object) => object.angle = action.angle);
            return {
                ...state,
                objects: arrayWithUpdatedObject
            };
        }
        case 'SET_SELECTED_OBJECT_LABEL': {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.objects,
                action.selectedObject,
                (object) => object.label = action.label);
            return {
                ...state,
                objects: arrayWithUpdatedObject
            };
        }
        case 'SET_SELECTED_OBJECT_POSITION': {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.objects,
                action.selectedObject,
                (object) => object.position = {
                    x: action.x,
                    y: action.y
                });
            return {
                ...state,
                objects: arrayWithUpdatedObject
            };
        }
        case 'SET_SELECTED_OBJECT_SIZE': {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.objects,
                action.selectedObject,
                (object) => object.size = {
                    width: action.width,
                    height: action.height
                });
            return {
                ...state,
                objects: arrayWithUpdatedObject
            };
        }
        case 'SET_SELECTED_OBJECT_START': {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.objects,
                action.selectedObject,
                (object) => object.start = {
                    x: action.x,
                    y: action.y
                });
            return {
                ...state,
                objects: arrayWithUpdatedObject
            };
        }
        case 'SET_SELECTED_OBJECT_END': {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.objects,
                action.selectedObject,
                (object) => object.end = {
                    x: action.x,
                    y: action.y
                });
            return {
                ...state,
                objects: arrayWithUpdatedObject,
            };

        }
        case 'ADD_OBJECT': {
            let objectArray = state.objects.slice();
            objectArray = [...objectArray, action.newObject];
            return {
                ...state,
                objects: objectArray
            };
        }
        case 'DELETE_OBJECT': {
            let selectedObjectId = action.selectedObject;
            if (selectedObjectId) {
                let newObjectArray = state.objects
                    .filter(object => object.id !== selectedObjectId);
                return {
                    ...state,
                    objects: newObjectArray
                }
            }
            else {
                return state;
            }
        }
        default:
            return state
    }
};

export default dungeonReducer
