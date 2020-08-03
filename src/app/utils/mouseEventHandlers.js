import { v4 as uuid } from 'uuid';
import { moveViewport, scroll } from "../reducers/dungeonReducer";
import { GRID_TILE_SIZE } from "./constants";
import { getClosestPointOnLine, lineLength } from "./geometry";
import TOOL_TYPE from "./toolType";
import DUNGEON_OBJECT_TYPE from './dungeonObjectTypes';

export const handleMouseDown = (mouseEvent, store) => {
    if (mouseEvent.buttons === 1) {
        store.dispatch({ type: 'MOUSE_DOWN' });
    }
}

export const handleMouseUp = (mouseEvent, store) => {
    let state = store.getState();
    if (state.mouseDown) {
        let mousePoint = state.editor.mouse.dungeonPosition;
        store.dispatch({ type: 'MOUSE_UP' });
        if (state.selectedTool === TOOL_TYPE.NEW_SPACE) {
            // TODO: Some terrible redux practices here I'm sure
            // Yep, this should go into the reducer or dispatch a thunk that will have access
            // to the full state.
            let startX = Math.floor(Math.min(state.mouseStartX, mousePoint.x) / GRID_TILE_SIZE);
            let startY = Math.floor(Math.min(state.mouseStartY, mousePoint.y) / GRID_TILE_SIZE);
            let endX = Math.ceil(Math.max(state.mouseStartX, mousePoint.x) / GRID_TILE_SIZE);
            let endY = Math.ceil(Math.max(state.mouseStartY, mousePoint.y) / GRID_TILE_SIZE);
            store.dispatch({
                type: 'ADD_OBJECT',
                newObject: {
                    id: uuid(),
                    type: DUNGEON_OBJECT_TYPE.SPACE,
                    position: {
                        x: startX,
                        y: startY
                    },
                    size: {
                        width: endX - startX,
                        height: endY - startY
                    }
                }
            });
        }
        else if (state.selectedTool === TOOL_TYPE.NEW_WALL) {
            let startX = Math.round(state.mouseStartX / GRID_TILE_SIZE);
            let startY = Math.round(state.mouseStartY / GRID_TILE_SIZE);
            let endX = Math.round(mousePoint.x / GRID_TILE_SIZE);
            let endY = Math.round(mousePoint.y / GRID_TILE_SIZE);
            store.dispatch({
                type: 'ADD_OBJECT',
                newObject: {
                    id: uuid(),
                    type: DUNGEON_OBJECT_TYPE.WALL,
                    start: {
                        x: startX,
                        y: startY
                    },
                    end: {
                        x: endX,
                        y: endY
                    }
                }
            });
        }
        else if (state.selectedTool === TOOL_TYPE.NEW_DOOR) {
            let minDistance = 25;
            let snapPoint = null;
            let minWallId = null;
            state.dungeon.objects
                .filter(object => object.type === DUNGEON_OBJECT_TYPE.WALL)
                .forEach(wall =>{
                    // try each point and get the shortest distance
                    let scaledStart = {
                        x: wall.start.x * GRID_TILE_SIZE,
                        y: wall.start.y * GRID_TILE_SIZE
                    };
                    let scaledEnd = {
                        x: wall.end.x * GRID_TILE_SIZE,
                        y: wall.end.y * GRID_TILE_SIZE
                    }
                    let closestPoint = getClosestPointOnLine({
                            x: state.mouseStartX,
                            y: state.mouseStartY
                        }, scaledStart, scaledEnd);
                    // if the shortest distance of one is < snapping threshold, snap to it
                    let distance = lineLength(closestPoint, {
                        x: state.mouseStartX,
                        y: state.mouseStartY
                    });
                    if (!minDistance || distance < minDistance) {
                        minDistance = distance;
                        snapPoint = closestPoint;
                        minWallId = wall.id;
                    }
                });

            let doorWall = state.dungeon.objects.find(wall => wall.id === minWallId);
            let scaledStart = {
                x: doorWall.start.x * GRID_TILE_SIZE,
                y: doorWall.start.y * GRID_TILE_SIZE
            };
            let scaledEnd = {
                x: doorWall.end.x * GRID_TILE_SIZE,
                y: doorWall.end.y * GRID_TILE_SIZE
            }
            let endPoint = getClosestPointOnLine(mousePoint, scaledStart, scaledEnd);
            store.dispatch({
                type: 'ADD_OBJECT',
                newObject: {
                    id: uuid(),
                    type: DUNGEON_OBJECT_TYPE.DOOR,
                    start: {
                        x: snapPoint.x / GRID_TILE_SIZE,
                        y: snapPoint.y / GRID_TILE_SIZE,
                    },
                    end: {
                        x: endPoint.x / GRID_TILE_SIZE,
                        y: endPoint.y / GRID_TILE_SIZE,
                    }
                }
            });
        }
    }
}

export const handleMouseMove = (mouseEvent, store) => {
    if (mouseEvent.buttons === 2) {
        store.dispatch(moveViewport(mouseEvent.movementX, mouseEvent.movementY));
    }
}

export const handleWheelEvent = (wheelEvent, store) => {
    store.dispatch(scroll(wheelEvent));
}
