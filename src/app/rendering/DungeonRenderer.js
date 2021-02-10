import * as PIXI from 'pixi.js';
import * as DungeonObjectOperations from '../dungeonObjects/DungeonObjectOperations';
import { pngExported, setCurrentMousePosition } from "../reducers/editorActions";
import store from '../store.js';
import * as ToolRouter from '../tools/ToolRouter';
import download from "../utils/download";

/**
 * @param {PIXI.Application} app
 * @param {PIXI.Graphics} graphics
 * @param {GridRenderer} gridRenderer
 */
export const render = (app, graphics, gridRenderer) => {
    /**
     * @type {import("../reducers").State}
     */
    let state = store.getState();

    handlePanning(app, state);
    handleScaling(state, app);

    drawDungeonObjects(app.stage, state);
    gridRenderer.renderGrid(state.dungeon.size.width, state.dungeon.size.height);

    handleExporting(state, app);

    if (app.renderer.plugins.interaction.mouseOverRenderer) {
        graphics.clear();
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
            let newChildGraphics = DungeonObjectOperations.createRenderObject(objectIdMap[objectId]);
            newChildGraphics.id = objectId;
            newChildGraphics.interactive = true;
            container.addChild(newChildGraphics);
        }
    });

    // Sync all child graphics with state
    container.children.forEach(graphics => {
        if (graphics.id) {
            let object = objectIdMap[graphics.id];
            if (object) {
                DungeonObjectOperations.renderObject(graphics, object, state.editor.selectedObjectIds.includes(graphics.id))
            }
            else {
                container.removeChild(graphics);
            }
        }
    });
}

function handleExporting(state, app) {
    if (state.editor.exportToPngClicked) {
        exportImage(app, state);
    }
}

function handleScaling(state, app) {
    let fractionalScale = state.editor.scale / 100;
    if (app.stage.scale.x !== fractionalScale) {
        app.stage.scale.set(fractionalScale);
    }
}

function handlePanning(app, state) {
    app.stage.position.set(state.editor.position.x, state.editor.position.y);
}

function exportImage(app, state) {
    let exportTexture = app.renderer.generateTexture(app.stage,
        null,
        1.0 / app.stage.scale.x,
        new PIXI.Rectangle(
            app.stage.position.x - 1,
            app.stage.position.y - 1,
            app.stage.width,
            app.stage.height
        ));
    let normalizedDungeonName = state.dungeon.name.toLowerCase().replace(/\s/g, '_');
    let filename = `${normalizedDungeonName}_${state.dungeon.size.width}x${state.dungeon.size.height}.png`;
    download(app.renderer.extract.base64(exportTexture), filename);
    store.dispatch(pngExported());
}
