import * as PIXI from 'pixi.js';
import React from 'react';
import { render as renderDungeon } from '../rendering/DungeonRenderer';
import store from '../store.js';
import handleKeyboardEvent from '../utils/keyboardEventHandlers.js';
import * as MouseEventHandler from '../utils/mouseEventHandlers.js';

export default class DungeonEditor extends React.Component {
    render() {
        return <div
            style={{ height: "100%", width: "100%" }}
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

        this.setupInteractions()

        app.ticker.add(() => {
            renderDungeon(app, graphics);
        });
    }

    setupInteractions() {
        this.canvasDiv.addEventListener("wheel", (wheelEvent) => {
            MouseEventHandler.handleWheelEvent(wheelEvent, store);
            wheelEvent.preventDefault();
        });
        this.canvasDiv.addEventListener('contextmenu', (event) => {
            event.preventDefault();
        });
        this.canvasDiv.addEventListener('pointerdown', (event) => {
            MouseEventHandler.handleMouseDown(event, store);
        });
        this.canvasDiv.addEventListener('pointerup', (event) => {
            MouseEventHandler.handleMouseUp(event, store);
        });
        this.canvasDiv.addEventListener('pointermove', (pointerEvent) => {
            MouseEventHandler.handleMouseMove(pointerEvent, store);
        });
        this.canvasDiv.addEventListener('keydown', (event) => {
            handleKeyboardEvent(event, store);
        });
    }
}
