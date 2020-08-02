import * as PIXI from 'pixi.js';
import { selectObject, setMouseDungeonPosition } from "../reducers/dungeonReducer";
import store from '../store.js';
import { GRID_TILE_SIZE } from '../utils/constants';
import { getClosestPointOnLine, lineLength } from '../utils/geometry.js';
import TOOLTYPE from '../utils/toolTypes.js';

export const render = (app, graphics) => {
    var state = store.getState();

    app.stage.position.set(state.editor.position.x, state.editor.position.y);
    if (app.stage.scale.x !== state.editor.scale) {
        app.stage.scale.set(state.editor.scale);
    }

    graphics.clear();

    drawDungeonObjects(app.stage, state);
    drawGrid(graphics, state.dungeon.size.width, state.dungeon.size.height);

    if (app.renderer.plugins.interaction.mouseOverRenderer) {
        drawMouseCursor(state, graphics);

        let mousePosition = app.renderer.plugins.interaction.mouse.getLocalPosition(app.stage);
        store.dispatch(setMouseDungeonPosition(mousePosition.x, mousePosition.y));
    }
    else {
        store.dispatch(setMouseDungeonPosition(null, null));
    }
}
export default render;

const drawDungeonObjects = (container, state) => {
    let stateSpaceMap = state.dungeon.spaces.reduce((map, space) => {
        map[space.id] = space;
        return map;
    }, {});
    // Add any spaces that are in state but not in pixi
    let containerObjectIds = new Set(container.children.map(child => child.id));
    let stateSpaceIds = Object.keys(stateSpaceMap);
    stateSpaceIds.forEach(spaceId => {
        if (!containerObjectIds.has(spaceId)) {
            let newChildGraphics = new PIXI.Graphics();
            newChildGraphics.id = spaceId;
            newChildGraphics.interactive = true;
            newChildGraphics.mouseup = function () {
                store.dispatch(selectObject(this.id));
            };
            container.addChild(newChildGraphics);
        }
    });
    let stateWallMap = state.dungeon.walls.reduce((map, wall) => {
        map[wall.id] = wall;
        return map;
    }, {});
    let stateWallIds = Object.keys(stateWallMap);
    stateWallIds.forEach(wallId => {
        if (!containerObjectIds.has(wallId)) {
            let newChildGraphics = new PIXI.Graphics();
            newChildGraphics.id = wallId;
            newChildGraphics.interactive = true;
            newChildGraphics.mouseup = function () {
                store.dispatch(selectObject(this.id));
            };
            container.addChild(newChildGraphics);
        }
    });
    let stateDoorMap = state.dungeon.doors.reduce((map, door) => {
        map[door.id] = door;
        return map;
    }, {});
    let stateDoorIds = Object.keys(stateDoorMap);
    stateDoorIds.forEach(doorId => {
        if (!containerObjectIds.has(doorId)) {
            let newChildGraphics = new PIXI.Graphics();
            newChildGraphics.id = doorId;
            newChildGraphics.interactive = true;
            newChildGraphics.mouseup = function () {
                store.dispatch(selectObject(this.id));
            };
            container.addChild(newChildGraphics);
        }
    });

    // Sync all child graphics with state
    container.children.forEach(graphics => {
        if (graphics.id) {
            let space = stateSpaceMap[graphics.id];
            let wall = stateWallMap[graphics.id];
            let door = stateDoorMap[graphics.id];
            if (space) {
                drawSpace(graphics, space, state);
            }
            else if (wall) {
                drawWall(graphics, wall, state);
            }
            else if (door) {
                drawDoor(graphics, door, state);
            }
            else {
                container.removeChild(graphics);
            }
        }
    });
}

const drawMouseCursor = (state, graphics) => {
    let mousePoint = state.editor.mouse.dungeonPosition;
    let snappedX, snappedY, width, height;
    
    if (state.selectedTool === TOOLTYPE.NEW_WALL) {
        if (state.mouseDown) {
            let startX = Math.round(state.mouseStartX / GRID_TILE_SIZE) * GRID_TILE_SIZE;
            let startY = Math.round(state.mouseStartY / GRID_TILE_SIZE) * GRID_TILE_SIZE;
            let endX = Math.round(mousePoint.x / GRID_TILE_SIZE) * GRID_TILE_SIZE;
            let endY = Math.round(mousePoint.y / GRID_TILE_SIZE) * GRID_TILE_SIZE;
            graphics.lineStyle(5, 0xfffd00);
            graphics.moveTo(startX, startY);
            graphics.lineTo(endX, endY);
            graphics.lineStyle();
            graphics.beginFill(0xfffd00);
            graphics.drawCircle(startX, startY, 2.5);
            graphics.drawCircle(endX, endY, 2.5);
            graphics.endFill();
        }
        else {
            // get nearest center point
            let hoverX = Math.round(mousePoint.x / GRID_TILE_SIZE) * GRID_TILE_SIZE;
            let hoverY = Math.round(mousePoint.y / GRID_TILE_SIZE) * GRID_TILE_SIZE;

            graphics.lineStyle();
            graphics.beginFill(0xfffd00);
            graphics.drawCircle(hoverX, hoverY, 2.5);
            graphics.endFill();
        }
    }
    else if (state.selectedTool === TOOLTYPE.NEW_DOOR) {
        if (!state.mouseDown) {
            // try to snap to the nearest line:
            // for each line, get the nearest point on the line
            let minDistance = 25;
            let snapPoint = null;
            state.dungeon.walls.forEach(wall => {
                // try each point and get the shortest distance
                let scaledStart = {
                    x: wall.start.x * GRID_TILE_SIZE,
                    y: wall.start.y * GRID_TILE_SIZE
                };
                let scaledEnd = {
                    x: wall.end.x * GRID_TILE_SIZE,
                    y: wall.end.y * GRID_TILE_SIZE
                }
                let closestPoint = getClosestPointOnLine(mousePoint, scaledStart, scaledEnd);
                // if the shortest distance of one is < snapping threshold, snap to it
                let distance = lineLength(closestPoint, mousePoint);
                if (!minDistance || distance < minDistance) {
                    minDistance = distance;
                    snapPoint = closestPoint;
                }
            });
            if (snapPoint) {
                graphics.lineStyle();
                graphics.beginFill(0xfffd00);
                graphics.drawCircle(snapPoint.x, snapPoint.y, 2.5);
                graphics.endFill();
            }
        }
        else {
            let minDistance = 25;
            let snapPoint = null;
            let minWallId = null;
            state.dungeon.walls.forEach(wall => {
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
            // draw a line from the start point 
            let startX = snapPoint.x;
            let startY = snapPoint.y;

            let doorWall = state.dungeon.walls.find(wall => wall.id === minWallId);
            let scaledStart = {
                x: doorWall.start.x * GRID_TILE_SIZE,
                y: doorWall.start.y * GRID_TILE_SIZE
            };
            let scaledEnd = {
                x: doorWall.end.x * GRID_TILE_SIZE,
                y: doorWall.end.y * GRID_TILE_SIZE
            }
            let endPoint = getClosestPointOnLine(mousePoint, scaledStart, scaledEnd);

            let endX = endPoint.x;
            let endY = endPoint.y;

            graphics.lineStyle(5, 0xfffd00);
            graphics.moveTo(startX, startY);
            graphics.lineTo(endX, endY);
            graphics.lineStyle();
            graphics.beginFill(0xfffd00);
            graphics.drawCircle(startX, startY, 2.5);
            graphics.drawCircle(endX, endY, 2.5);
            graphics.endFill();
        }
    }
    else {
        if (state.mouseDown) {
            let startX = Math.min(state.mouseStartX, mousePoint.x);
            let startY = Math.min(state.mouseStartY, mousePoint.y);
            let endX = Math.max(state.mouseStartX, mousePoint.x);
            let endY = Math.max(state.mouseStartY, mousePoint.y);
            snappedX = Math.floor(startX / GRID_TILE_SIZE) * GRID_TILE_SIZE;
            snappedY = Math.floor(startY / GRID_TILE_SIZE) * GRID_TILE_SIZE;
            endX = Math.floor(endX / GRID_TILE_SIZE) * GRID_TILE_SIZE + GRID_TILE_SIZE;
            endY = Math.floor(endY / GRID_TILE_SIZE) * GRID_TILE_SIZE + GRID_TILE_SIZE;
            width = endX - snappedX;
            height = endY - snappedY;
        }
        else {
            // snap to nearest grid point
            // for now for simplicity let's say top left
            snappedX = Math.floor(mousePoint.x / GRID_TILE_SIZE) * GRID_TILE_SIZE;
            snappedY = Math.floor(mousePoint.y / GRID_TILE_SIZE) * GRID_TILE_SIZE;
            width = GRID_TILE_SIZE;
            height = GRID_TILE_SIZE;
        }
        // draw a hover rect
        graphics.beginFill(0, 0);
        graphics.lineStyle(1, 0xfffd00);
        graphics.drawRect(snappedX, snappedY, width, height);
        graphics.endFill();
    }
}

const drawGrid = (graphics, gridWidth, gridHeight) => {
    graphics.lineStyle(1, 0x444444, 1, 0.5);
    for (let i = 0; i < gridWidth; i++) {
        graphics.moveTo(i * GRID_TILE_SIZE, 0);
        graphics.lineTo(i * GRID_TILE_SIZE, (gridHeight - 1) * GRID_TILE_SIZE);
    }
    for (let j = 0; j < gridHeight; j++) {
        graphics.moveTo(0, j * GRID_TILE_SIZE);
        graphics.lineTo((gridWidth - 1) * GRID_TILE_SIZE, j * GRID_TILE_SIZE);
    }
}


const drawWall = (graphics, wall, state) => {
    graphics.zIndex = 2;
    graphics.clear();
    graphics.beginFill(0x0266e6, 1);
    graphics.lineStyle(10, 0x0266e6, 1, 0.5);
    graphics.moveTo(wall.start.x * GRID_TILE_SIZE, wall.start.y * GRID_TILE_SIZE);
    graphics.lineTo(wall.end.x * GRID_TILE_SIZE, wall.end.y * GRID_TILE_SIZE);
    graphics.lineStyle();
    graphics.drawCircle(wall.start.x * GRID_TILE_SIZE, wall.start.y * GRID_TILE_SIZE, 5);
    graphics.drawCircle(wall.end.x * GRID_TILE_SIZE, wall.end.y * GRID_TILE_SIZE, 5);
    let half = 10 / 2;
    graphics.endFill();

    if (state.selectedObject === graphics.id) {
        graphics.tint = 0xffff33;
    }
    else {
        graphics.tint = 0xffffff;
    }
    graphics.hitArea = new PIXI.Polygon([
        wall.start.x * GRID_TILE_SIZE - half, wall.start.y * GRID_TILE_SIZE - half,
        wall.start.x * GRID_TILE_SIZE + half, wall.start.y * GRID_TILE_SIZE + half,
        wall.end.x * GRID_TILE_SIZE + half, wall.end.y * GRID_TILE_SIZE + half,
        wall.end.x * GRID_TILE_SIZE - half, wall.end.y * GRID_TILE_SIZE - half,
    ]);
    return half;
}

const drawSpace = (graphics, space, state) => {
    graphics.clear();
    graphics.beginFill(0xd6d5d5);
    graphics.drawRect(
        space.position.x * GRID_TILE_SIZE,
        space.position.y * GRID_TILE_SIZE,
        space.size.width * GRID_TILE_SIZE,
        space.size.height * GRID_TILE_SIZE);
    graphics.endFill();

    if (state.selectedObject === graphics.id) {
        graphics.tint = 0xffffcc;
    }
    else {
        graphics.tint = 0xffffff;
    }
}

const drawDoor = (graphics, door, state) => {
    graphics.zIndex = 3;
    graphics.clear();
    graphics.beginFill(0x002b56, 1);
    graphics.lineStyle(20, 0x002b56, 1, 0.5);
    graphics.moveTo(door.start.x * GRID_TILE_SIZE, door.start.y * GRID_TILE_SIZE);
    graphics.lineTo(door.end.x * GRID_TILE_SIZE, door.end.y * GRID_TILE_SIZE);
    graphics.lineStyle();
    let half = 20 / 2;
    graphics.endFill();

    if (state.selectedObject === graphics.id) {
        graphics.tint = 0xffff33;
    }
    else {
        graphics.tint = 0xffffff;
    }
    graphics.hitArea = new PIXI.Polygon([
        door.start.x * GRID_TILE_SIZE - half, door.start.y * GRID_TILE_SIZE - half,
        door.start.x * GRID_TILE_SIZE + half, door.start.y * GRID_TILE_SIZE + half,
        door.end.x * GRID_TILE_SIZE + half, door.end.y * GRID_TILE_SIZE + half,
        door.end.x * GRID_TILE_SIZE - half, door.end.y * GRID_TILE_SIZE - half,
    ]);
}

