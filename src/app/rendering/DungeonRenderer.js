import * as PIXI from 'pixi.js';
import { selectObject, setMouseDungeonPosition } from "../reducers/dungeonReducer";
import store from '../store.js';
import { GRID_TILE_SIZE } from '../utils/constants';
import DUNGEON_OBJECT_TYPE from '../utils/dungeonObjectTypes';
import * as ToolRouter from '../tools/ToolRouter';

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
    let objectIdMap = state.dungeon.objects.reduce((map, space) => {
        map[space.id] = space;
        return map;
    }, {});

    let containerObjectIds = new Set(container.children.map(child => child.id));
    let stateObjectIds = Object.keys(objectIdMap);
    stateObjectIds.forEach(spaceId => {
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

    // Sync all child graphics with state
    container.children.forEach(graphics => {
        if (graphics.id) {
            let object = objectIdMap[graphics.id];
            if (object) {
                switch (object.type) {
                    case DUNGEON_OBJECT_TYPE.SPACE:
                        drawSpace(graphics, object, state);
                        break;
                    case DUNGEON_OBJECT_TYPE.WALL:
                        drawWall(graphics, object, state);
                        break;
                    case DUNGEON_OBJECT_TYPE.DOOR:
                        drawDoor(graphics, object, state);
                        break;
                    case DUNGEON_OBJECT_TYPE.LABEL:
                        drawLabel(graphics, object, state);
                        break;
                    default:
                        break;
                }
            }
            else {
                container.removeChild(graphics);
            }
        }
    });
}

const drawMouseCursor = (state, graphics) => {
    ToolRouter.renderTool(state, graphics);
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

const drawLabel = (graphics, label, state) => {
    graphics.zIndex = 4;
    graphics.clear();
    if (graphics.children.length === 0) {
        let labelText = new PIXI.Text(label.label);
        labelText.style.fontFamily = 'Helvetica';
        labelText.style.fontSize = 36;
        labelText.style.fontWeight = 400;
        graphics.addChild(labelText);
    }

    let labelText = graphics.children[0];

    if (state.selectedObject === graphics.id) {
        labelText.style.fill = 0xfffff33;
    }
    else {
        labelText.style.fill = 0x000000;
    }

    labelText.text = label.label;
    labelText.position.set(label.position.x * GRID_TILE_SIZE, label.position.y * GRID_TILE_SIZE);
}
