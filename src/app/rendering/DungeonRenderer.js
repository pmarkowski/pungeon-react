import { pngExported, selectObject, selectObjects, setCurrentMousePosition } from "../reducers/editorActions";
import store from '../store.js';
import { GRID_TILE_SIZE } from '../utils/constants';
import * as ToolRouter from '../tools/ToolRouter';
import * as DungeonObjectOperations from '../dungeonObjects/DungeonObjectOperations'
import download from "../utils/download";
import * as PIXI from 'pixi.js'
import { doRectanglesIntersect } from "../utils/geometry";

/**
 * @param {PIXI.Application} app
 * @param {PIXI.Graphics} graphics
 */
export const render = (app, graphics) => {
    /**
     * @type {import("../reducers").State}
     */
    let state = store.getState();

    handlePanning(app, state);
    handleScaling(state, app);

    handleSelecting(state, app);

    graphics.clear();

    drawDungeonObjects(app.stage, state);
    drawGrid(graphics, state.dungeon.size.width, state.dungeon.size.height);

    handleExporting(state, app);

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

function handleExporting(state, app) {
    if (state.editor.exportToPngClicked) {
        exportImage(app, state);
    }
}

function handleSelecting(state, app) {
    if (state.editor.selectingAtPoint) {
        let mousePoint = new PIXI.Point(
            state.editor.selectingAtPoint.x,
            state.editor.selectingAtPoint.y);
        let globalPosition = app.stage.worldTransform.apply(mousePoint);
        let selectedObject = app.renderer.plugins.interaction.hitTest(
            globalPosition);

        if (selectedObject) {
            store.dispatch(selectObject(selectedObject.id, state.editor.selectingAtPoint.shouldMultiSelect));
        }
        else {
            store.dispatch(selectObjects([], state.editor.selectingAtPoint.shouldMultiSelect));
        }
    }
    else if (state.editor.selectingInBoundingBox) {
        let objectIdsToSelect = [];
        app.stage.children.forEach(child => {
            if (doRectanglesIntersect(child.getLocalBounds(), state.editor.selectingInBoundingBox) && child.id) {
                objectIdsToSelect.push(child.id);
            }
        });
        if (objectIdsToSelect.length > 0) {
            store.dispatch(selectObjects(objectIdsToSelect, state.editor.selectingInBoundingBox.shouldMultiSelect));
        }
        else {
            store.dispatch(selectObjects([], false));
        }
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
