import { DungeonObjectOperations } from '../dungeonObjects/DungeonObject';
import { createArrayWithUpdatedObject } from '../utils/createArrayWithUpdatedObject'
import DUNGEON_ACTION_TYPE from './dungeonActionType'

export const dungeonReducer = (state = {}, action) => {
    switch (action.type) {
        case DUNGEON_ACTION_TYPE.NEW_DUNGEON: {
            return {
                size: {
                    width: 24,
                    height: 32
                },
                objects: []
            }
        }
        case DUNGEON_ACTION_TYPE.SET_DUNGEON_SIZE: {
            return {
                ...state,
                size: {
                    width: action.width,
                    height: action.height
                }
            }
        }
        case DUNGEON_ACTION_TYPE.MOVE_SELECTED_OBJECT: {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.objects,
                action.selectedObject,
                (object) => {
                    DungeonObjectOperations.translate(object, action.deltaX, action.deltaY);
                });
            return {
                ...state,
                objects: arrayWithUpdatedObject
            };
        }
        case DUNGEON_ACTION_TYPE.SET_SELECTED_OBJECT_TEXTURE_PATH: {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.objects,
                action.selectedObject,
                (object) => object.textureUrl = action.texturePath);
            return {
                ...state,
                objects: arrayWithUpdatedObject
            };
        }
        case DUNGEON_ACTION_TYPE.SET_SELECTED_OBJECT_ANGLE: {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.objects,
                action.selectedObject,
                (object) => object.angle = action.angle);
            return {
                ...state,
                objects: arrayWithUpdatedObject
            };
        }
        case DUNGEON_ACTION_TYPE.SET_SELECTED_OBJECT_LABEL: {
            let arrayWithUpdatedObject = createArrayWithUpdatedObject(
                state.objects,
                action.selectedObject,
                (object) => object.label = action.label);
            return {
                ...state,
                objects: arrayWithUpdatedObject
            };
        }
        case DUNGEON_ACTION_TYPE.SET_SELECTED_OBJECT_POSITION: {
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
        case DUNGEON_ACTION_TYPE.SET_SELECTED_OBJECT_SIZE: {
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
        case DUNGEON_ACTION_TYPE.SET_SELECTED_OBJECT_START: {
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
        case DUNGEON_ACTION_TYPE.SET_SELECTED_OBJECT_END: {
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
        case DUNGEON_ACTION_TYPE.ADD_OBJECT: {
            let objectArray = state.objects.slice();
            objectArray = [...objectArray, action.newObject];
            return {
                ...state,
                objects: objectArray
            };
        }
        case DUNGEON_ACTION_TYPE.DELETE_OBJECTS: {
            let objectIds = action.objectIds;
            if (objectIds) {
                let newObjectArray = state.objects
                    .filter(object => !objectIds.includes(object.id));
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
