import * as PIXI from 'pixi.js';
import React from 'react';
import { render as renderDungeon } from '../rendering/DungeonRenderer';
import { GridRenderer } from '../rendering/GridRenderer';
import store from '../store.js';
import { handleKeyPressed, handleKeyReleased } from '../utils/keyboardEventHandlers.js';
import * as MouseEventHandler from '../utils/mouseEventHandlers.js';

export default class DungeonEditor extends React.Component {
    render() {
        return <div
            className="h-full w-full"
            tabIndex={-1}
            ref={(element) => this.canvasDiv = element}>
        </div>
    }

    componentDidMount() {
        const app = new PIXI.Application({
            backgroundColor: 0x5f5f5f,
            sharedLoader: true,
            sharedTicker: true,
            antialias: true,
            resizeTo: this.canvasDiv,
        });
        this.app = app;
        app.view.style.position = "absolute";
        this.canvasDiv.appendChild(app.view);

        window.onresize = () => {
            app.queueResize();
        }

        let graphics = new PIXI.Graphics();
        graphics.zIndex = Number.MAX_SAFE_INTEGER;
        app.stage.sortableChildren = true;
        app.stage.addChild(graphics);

        this.setupInteractions(app)

        let gridRenderer = new GridRenderer();
        app.stage.addChild(gridRenderer.createRenderObject());

        app.ticker.add(() => {
            renderDungeon(app, graphics, gridRenderer);
        });
    }

    setupInteractions(app) {
        this.canvasDiv.addEventListener("wheel", (wheelEvent) => {
            MouseEventHandler.handleWheelEvent(wheelEvent, store);
            wheelEvent.preventDefault();
        });
        this.canvasDiv.addEventListener('contextmenu', (event) => {
            event.preventDefault();
        });
        this.canvasDiv.addEventListener('pointerdown', (event) => {
            MouseEventHandler.handleMouseDown(event, store, app);
        });
        this.canvasDiv.addEventListener('pointerup', (event) => {
            MouseEventHandler.handleMouseUp(event, store, app);
        });
        this.canvasDiv.addEventListener('pointermove', (pointerEvent) => {
            MouseEventHandler.handleMouseMove(pointerEvent, store);
        });
        this.canvasDiv.addEventListener('keydown', (event) => {
            handleKeyPressed(event, store);
        });
        this.canvasDiv.addEventListener('keyup', (event) => {
            handleKeyReleased(event, store);
        })
    }
}
