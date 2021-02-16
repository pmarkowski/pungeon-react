import { translate } from '../dungeonObjects/DungeonObjectOperations';
import { createSpace } from '../dungeonObjects/SpaceOperations';
import { createToken } from '../dungeonObjects/TokenOperations';
import { createWall } from '../dungeonObjects/WallOperations';
import { createArrayWithUpdatedObject, createArrayWithUpdatedObjects } from '../utils/createArrayWithUpdatedObject'
import DUNGEON_ACTION_TYPE from './dungeonActionType'
/**
 * @typedef {defaultDungeonState} DungeonState
 */
const defaultDungeonState = {
    name: "Dungeon",
    size: {
        width: 28,
        height: 32
    },
    /** @type {import('../dungeonObjects/DungeonObjectOperations').DungeonObject[]} */
    objects: [
        createToken("/assets/stairs.png", 2, 4, 1, 2, 0),
        createSpace({startX: 1, startY: 1, endX: 6, endY: 6}),
        createSpace({startX: 6, startY: 4, endX: 13, endY: 13}),
        createSpace({startX: 15, startY: 15, endX: 21, endY: 22}),
        createSpace({startX: 21, startY: 19, endX: 25, endY: 28}),
        createWall(1, 1, 1, 6),
        createWall(6, 6, 1, 6),
        createWall(6, 13, 6, 6),
        createWall(13, 13, 6, 13),
        createWall(13, 4, 13, 13),
        createWall(6, 4, 13, 4),
        createWall(6, 1, 6, 4),
        createWall(1, 1, 6, 1),
        createWall(15, 15, 15, 22),
        createWall(21, 22, 15, 22),
        createWall(21, 15, 15, 15),
        createWall(21, 19, 21, 15),
        createWall(25, 19, 21, 19),
        createWall(21, 22, 21, 28),
        createWall(21, 28, 25, 28),
        createWall(25, 19, 25, 28)
    ]
  }

export const dungeonReducer = (state = defaultDungeonState, action) => {
    switch (action.type) {
        case DUNGEON_ACTION_TYPE.NEW_DUNGEON: {
            return {
                name: "Untitled Dungeon",
                size: {
                    width: 24,
                    height: 32
                },
                objects: []
            }
        }
        case DUNGEON_ACTION_TYPE.SET_DUNGEON_NAME: {
            return {
                ...state,
                name: action.name
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
            let arrayWithUpdatedObject = createArrayWithUpdatedObjects(
                state.objects,
                action.selectedObjectIds,
                (object) => translate(object, action.deltaX, action.deltaY));
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
        case DUNGEON_ACTION_TYPE.ADD_OBJECTS: {
            let objectArray = state.objects.slice();
            objectArray = [...objectArray, ...action.newObjects];
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
