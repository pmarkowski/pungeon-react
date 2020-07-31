import React from 'react'
import * as PIXI from 'pixi.js'
import store from '../store.js'
import { v4 as uuid } from 'uuid'
import { selectObject, setMouseDungeonPosition } from "../reducers/dungeonReducer";
import handleKeyboardEvent from '../utils/keyboardEventHandlers.js';
import TOOLTYPE from '../utils/toolTypes.js';
import { handleWheelEvent, handleMouseMove } from '../utils/mouseEventHandlers.js';
import { getClosestPointOnLine, lineLength } from '../utils/geometry.js';
import { GRID_TILE_SIZE } from '../utils/constants.js';

export default class DungeonEditor extends React.Component {
    render() {
        return <div
            style={{ height: "85vh" }}
            tabIndex={-1}
            ref={(element) => this.canvasDiv = element}>
        </div>
    }

    componentDidMount() {
        const app = new PIXI.Application({
            backgroundColor: 0x5f5f5f,
            sharedLoader: true,
            sharedTicker: true,
            antialias: true
        });
        this.app = app;
        this.canvasDiv.appendChild(app.view);
        this.app.resizeTo = this.canvasDiv;
        this.app.resize();

        let graphics = new PIXI.Graphics();
        graphics.zIndex = Number.MAX_SAFE_INTEGER;
        app.stage.sortableChildren = true;
        app.stage.addChild(graphics);

        let gridTileSize = GRID_TILE_SIZE;
        this.setupInteractions(app, gridTileSize)

        app.ticker.add((delta) => {
            var state = store.getState();

            app.stage.position.set(state.editor.position.x, state.editor.position.y);
            if (app.stage.scale.x !== state.editor.scale) {
                app.stage.scale.set(state.editor.scale);
            }

            graphics.clear();

            this.drawDungeonObjects(app.stage, state, gridTileSize);
            this.drawGrid(graphics, state.dungeon.size.width, state.dungeon.size.height, gridTileSize);

            if (app.renderer.plugins.interaction.mouseOverRenderer) {
                this.drawMouseCursor(app, state, gridTileSize, graphics);

                let mousePosition = app.renderer.plugins.interaction.mouse.getLocalPosition(app.stage);
                store.dispatch(setMouseDungeonPosition(mousePosition.x, mousePosition.y));
            }
            else {
                store.dispatch(setMouseDungeonPosition(null, null));
            }
        });
    }

    setupInteractions(app, gridTileSize) {
        this.canvasDiv.addEventListener("wheel", (wheelEvent) => {
            handleWheelEvent(wheelEvent, store);
            wheelEvent.preventDefault();
        });
        this.canvasDiv.addEventListener('contextmenu', (event) => {
            event.preventDefault()
        });
        this.canvasDiv.addEventListener('pointerdown', () => {
            this.onMouseDown(app)
        });
        this.canvasDiv.addEventListener('pointerup', () => {
            this.onMouseUp(app, gridTileSize)
        });
        this.canvasDiv.addEventListener('pointermove', (pointerEvent) => {
            handleMouseMove(pointerEvent, store);
        });
        this.canvasDiv.addEventListener('keydown', (event) => {
            handleKeyboardEvent(event, store);
        });
    }

    onMouseDown(app) {
        if (app.renderer.plugins.interaction.mouse.button === 0) {
            let mousePoint = app.renderer.plugins.interaction.mouse.getLocalPosition(app.stage);
            store.dispatch({ type: 'MOUSE_DOWN', x: mousePoint.x, y: mousePoint.y });
        }
    }

    onMouseUp(app, gridTileSize) {
        if (app.renderer.plugins.interaction.mouse.button === 0) {
            let mousePoint = app.renderer.plugins.interaction.mouse.getLocalPosition(app.stage);
            store.dispatch({ type: 'MOUSE_UP' });
            let state = store.getState();
            if (state.selectedTool === TOOLTYPE.NEW_SPACE) {
                // TODO: Some terrible redux practices here I'm sure
                // Yep, this should go into the reducer or dispatch a thunk that will have access
                // to the full state.
                let startX = Math.floor(Math.min(state.mouseStartX, mousePoint.x) / gridTileSize);
                let startY = Math.floor(Math.min(state.mouseStartY, mousePoint.y) / gridTileSize);
                let endX = Math.ceil(Math.max(state.mouseStartX, mousePoint.x) / gridTileSize);
                let endY = Math.ceil(Math.max(state.mouseStartY, mousePoint.y) / gridTileSize);
                store.dispatch({
                    type: 'ADD_SPACE',
                    newSpace: {
                        id: uuid(),
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
            else if (state.selectedTool === TOOLTYPE.NEW_WALL) {
                let startX = Math.round(state.mouseStartX / gridTileSize);
                let startY = Math.round(state.mouseStartY / gridTileSize);
                let endX = Math.round(mousePoint.x / gridTileSize);
                let endY = Math.round(mousePoint.y / gridTileSize);
                store.dispatch({
                    type: 'ADD_WALL',
                    newWall: {
                        id: uuid(),
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
        }
    }

    drawDungeonObjects(container, state, gridTileSize) {
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

        // Sync all child graphics with state
        container.children.forEach(graphics => {
            if (graphics.id) {
                let space = stateSpaceMap[graphics.id];
                let wall = stateWallMap[graphics.id];
                if (space) {
                    graphics.clear();
                    graphics.beginFill(0xd6d5d5);
                    graphics.drawRect(
                        space.position.x * gridTileSize,
                        space.position.y * gridTileSize,
                        space.size.width * gridTileSize,
                        space.size.height * gridTileSize);
                    graphics.endFill();

                    if (state.selectedObject === graphics.id) {
                        graphics.tint = 0xffffcc;
                    }
                    else {
                        graphics.tint = 0xffffff;
                    }
                }
                else if (wall) {
                    graphics.zIndex = 2;
                    graphics.clear();
                    graphics.beginFill(0x0266e6, 1);
                    graphics.lineStyle(10, 0x0266e6, 1, 0.5);
                    graphics.moveTo(wall.start.x * gridTileSize, wall.start.y * gridTileSize);
                    graphics.lineTo(wall.end.x * gridTileSize, wall.end.y * gridTileSize);
                    graphics.lineStyle();
                    graphics.drawCircle(wall.start.x * gridTileSize, wall.start.y * gridTileSize, 5);
                    graphics.drawCircle(wall.end.x * gridTileSize, wall.end.y * gridTileSize, 5);
                    var half = 10 / 2;
                    graphics.endFill();

                    if (state.selectedObject === graphics.id) {
                        graphics.tint = 0xffff33;
                    }
                    else {
                        graphics.tint = 0xffffff;
                    }
                    graphics.hitArea = new PIXI.Polygon([
                        wall.start.x * gridTileSize - half, wall.start.y * gridTileSize - half,
                        wall.start.x * gridTileSize + half, wall.start.y * gridTileSize + half,
                        wall.end.x * gridTileSize + half, wall.end.y * gridTileSize + half,
                        wall.end.x * gridTileSize - half, wall.end.y * gridTileSize -half,
                    ]);
                }
                else {
                    container.removeChild(graphics);
                }
            }
        });
    }

    drawMouseCursor(app, state, gridTileSize, graphics) {
        let mousePoint = app.renderer.plugins.interaction.mouse.getLocalPosition(app.stage);
        let snappedX, snappedY, width, height;
        
        if (state.selectedTool === TOOLTYPE.NEW_WALL) {
            if (state.mouseDown) {
                let startX = Math.round(state.mouseStartX / gridTileSize) * gridTileSize;
                let startY = Math.round(state.mouseStartY / gridTileSize) * gridTileSize;
                let endX = Math.round(mousePoint.x / gridTileSize) * gridTileSize;
                let endY = Math.round(mousePoint.y / gridTileSize) * gridTileSize;
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
                let hoverX = Math.round(mousePoint.x / gridTileSize) * gridTileSize;
                let hoverY = Math.round(mousePoint.y / gridTileSize) * gridTileSize;

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
                let minDistance = null;
                let snapPoint = null;
                state.dungeon.walls.forEach(wall => {
                    // try each point and get the shortest distance
                    let scaledStart = {
                        x: wall.start.x * gridTileSize,
                        y: wall.start.y * gridTileSize
                    };
                    let scaledEnd = {
                        x: wall.end.x * gridTileSize,
                        y: wall.end.y * gridTileSize
                    }
                    let closestPoint = getClosestPointOnLine(mousePoint, scaledStart, scaledEnd);
                    // if the shortest distance of one is < snapping threshold, snap to it
                    let distance = lineLength(closestPoint, mousePoint);
                    if (!minDistance || distance < minDistance) {
                        minDistance = distance;
                        snapPoint = closestPoint;
                    }
                });

                graphics.lineStyle();
                graphics.beginFill(0xfffd00);
                graphics.drawCircle(snapPoint.x, snapPoint.y, 2.5);
                graphics.endFill();
            }
        }
        else {
            if (state.mouseDown) {
                let startX = Math.min(state.mouseStartX, mousePoint.x);
                let startY = Math.min(state.mouseStartY, mousePoint.y);
                let endX = Math.max(state.mouseStartX, mousePoint.x);
                let endY = Math.max(state.mouseStartY, mousePoint.y);
                snappedX = Math.floor(startX / gridTileSize) * gridTileSize;
                snappedY = Math.floor(startY / gridTileSize) * gridTileSize;
                endX = Math.floor(endX / gridTileSize) * gridTileSize + gridTileSize;
                endY = Math.floor(endY / gridTileSize) * gridTileSize + gridTileSize;
                width = endX - snappedX;
                height = endY - snappedY;
            }
            else {
                // snap to nearest grid point
                // for now for simplicity let's say top left
                snappedX = Math.floor(mousePoint.x / gridTileSize) * gridTileSize;
                snappedY = Math.floor(mousePoint.y / gridTileSize) * gridTileSize;
                width = gridTileSize;
                height = gridTileSize;
            }
            // draw a hover rect
            graphics.beginFill(0, 0);
            graphics.lineStyle(1, 0xfffd00);
            graphics.drawRect(snappedX, snappedY, width, height);
            graphics.endFill();
        }
    }

    drawGrid(graphics, gridWidth, gridHeight, gridTileSize) {
        graphics.lineStyle(1, 0x444444, 1, 0.5);
        for (let i = 0; i < gridWidth; i++) {
            graphics.moveTo(i * gridTileSize, 0);
            graphics.lineTo(i * gridTileSize, (gridHeight - 1) * gridTileSize);
        }
        for (let j = 0; j < gridHeight; j++) {
            graphics.moveTo(0, j * gridTileSize);
            graphics.lineTo((gridWidth - 1) * gridTileSize, j * gridTileSize);
        }
    }
}
