import { pngExported, selectObject, setCurrentMousePosition } from "../reducers/editorActions";
import store from '../store.js';
import { GRID_TILE_SIZE } from '../utils/constants';
import * as ToolRouter from '../tools/ToolRouter';
import * as RenderRouter from './RenderRouter'
import TOOL_TYPE from "../tools/toolType";
import download from "../utils/download";
import * as PIXI from 'pixi.js'

export const render = (app, graphics) => {
    var state = store.getState();

    app.stage.position.set(state.editor.position.x, state.editor.position.y);
    let fractionalScale = state.editor.scale / 100;
    if (app.stage.scale.x !== fractionalScale) {
        app.stage.scale.set(fractionalScale);
    }

    graphics.clear();

    drawDungeonObjects(app.stage, state);
    drawGrid(graphics, state.dungeon.size.width, state.dungeon.size.height);

    if (state.editor.exportToPngClicked) {
        exportImage(app);
    }

    if (app.renderer.plugins.interaction.mouseOverRenderer) {
        ToolRouter.renderTool(state, graphics);

        let mousePosition = app.renderer.plugins.interaction.mouse.getLocalPosition(app.stage);
        store.dispatch(setCurrentMousePosition(mousePosition.x, mousePosition.y));
    }
    else {
        store.dispatch(setCurrentMousePosition(null, null));
    }
}
export default render;

const drawDungeonObjects = (container, state) => {
    let objectIdMap = state.dungeon.objects.reduce((map, object) => {
        map[object.id] = object;
        return map;
    }, {});

    let containerObjectIds = new Set(container.children.map(child => child.id));
    let stateObjectIds = Object.keys(objectIdMap);
    stateObjectIds.forEach(objectId => {
        if (!containerObjectIds.has(objectId)) {
            let newChildGraphics = RenderRouter.createRenderObject(objectIdMap[objectId]);
            newChildGraphics.id = objectId;
            newChildGraphics.interactive = true;
            newChildGraphics.mouseup = function () {
                if (store.getState().editor.selectedTool === TOOL_TYPE.SELECT) {
                    store.dispatch(selectObject(this.id));
                }
            };
            container.addChild(newChildGraphics);
        }
    });

    // Sync all child graphics with state
    container.children.forEach(graphics => {
        if (graphics.id) {
            let object = objectIdMap[graphics.id];
            if (object) {
                RenderRouter.renderObject(graphics, object, state.editor.selectedObjectIds.includes(graphics.id))
            }
            else {
                container.removeChild(graphics);
            }
        }
    });
}

const drawGrid = (graphics, gridWidth, gridHeight) => {
    graphics.lineStyle(1, 0x444444, 1, 0.5);
    for (let i = 0; i <= gridWidth; i++) {
        graphics.moveTo(i * GRID_TILE_SIZE, 0);
        graphics.lineTo(i * GRID_TILE_SIZE, gridHeight * GRID_TILE_SIZE);
    }

    for (let j = 0; j <= gridHeight; j++) {
        graphics.moveTo(0, j * GRID_TILE_SIZE);
        graphics.lineTo(gridWidth * GRID_TILE_SIZE, j * GRID_TILE_SIZE);
    }
}

function exportImage(app) {
    let exportTexture = app.renderer.generateTexture(app.stage,
        null,
        1.0 / app.stage.scale.x,
        new PIXI.Rectangle(
            app.stage.position.x - 1,
            app.stage.position.y - 1,
            app.stage.width,
            app.stage.height
        ));
    download(app.renderer.extract.base64(exportTexture), "dungeon.png");
    store.dispatch(pngExported());
}
