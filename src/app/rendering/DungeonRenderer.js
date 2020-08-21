import * as PIXI from 'pixi.js';
import { selectObject, setMouseDungeonPosition } from "../reducers/dungeonReducer";
import store from '../store.js';
import { GRID_TILE_SIZE } from '../utils/constants';
import * as ToolRouter from '../tools/ToolRouter';
import * as RenderRouter from './RenderRouter'

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
        ToolRouter.renderTool(state, graphics);

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
                RenderRouter.renderObject(graphics, object, state.selectedObject === graphics.id)
            }
            else {
                container.removeChild(graphics);
            }
        }
    });
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
