import React from 'react'
import * as PIXI from 'pixi.js'
import store from './Store.js'

export default class DungeonEditor extends React.Component {
    render() {
        return <div ref={(element) => this.canvasDiv = element}></div>
    }

    componentDidMount() {
        const app = new PIXI.Application({
            backgroundColor: 0x5f5f5f,
            width: 800,
            height: 600,
            sharedLoader: true,
            sharedTicker: true
        });
        this.app = app;
        this.canvasDiv.appendChild(app.view);
        this.app.resizeTo = this.canvasDiv;
        this.app.resize();

        // Render a circle to a texture
        var graphics = new PIXI.Graphics();
        app.stage.addChild(graphics);

        var texture = app.renderer.generateTexture(graphics);

        // Then create a sprite from the texture

        // var s = new PIXI.Sprite(texture);
        // s.interactive = true;
        // s.on('mouseover', () => {
        //     console.log('hovered');
        // });
        // s.on('mousedown', (sp) => {
        //     console.log(sp.currentTarget.id);
        //     store.dispatch({
        //         type: 'TOGGLE_SELECT'
        //     });
        // });
        // s.id = '823cc811-9499-4f3d-abeb-941d2ee4fd98';
        // app.stage.addChild(s);
        // PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.LINEAR;
        let gridSize = 32.0;
        // var gridOverlay = PIXI.Texture.from('/textures/grid-tile-overlay.png');
        // var tilingSprite = new PIXI.TilingSprite(gridOverlay, 800, 600);
        // tilingSprite.tileScale.set(gridSize / 128);
        // app.stage.addChild(tilingSprite);
        app.stage.scale.set(1);
        app.renderer.plugins.interaction.on('pointerdown', (mouseEvent) => {
            if (app.renderer.plugins.interaction.mouse.button == 0) {
                let mousePoint = app.renderer.plugins.interaction.mouse.getLocalPosition(app.stage);
                store.dispatch({ type: 'MOUSE_DOWN', x: mousePoint.x, y: mousePoint.y });
            }
        });
        app.renderer.plugins.interaction.on('pointerup', () => {
            if (app.renderer.plugins.interaction.mouse.button == 0) {
                let mousePoint = app.renderer.plugins.interaction.mouse.getLocalPosition(app.stage);
                store.dispatch({ type: 'MOUSE_UP' });
                // TODO: Some terrible redux practices here I'm sure
                // Yep, this should go into the reducer or dispatch a thunk that will have access
                // to the full state.
                let state = store.getState();
                let startX = Math.floor(Math.min(state.mouseStartX, mousePoint.x) / gridSize);
                let startY = Math.floor(Math.min(state.mouseStartY, mousePoint.y) / gridSize);

                let endX = Math.ceil(Math.max(state.mouseStartX, mousePoint.x) / gridSize);
                let endY = Math.ceil(Math.max(state.mouseStartY, mousePoint.y) / gridSize);


                store.dispatch({ type: 'ADD_SPACE', newSpace: {
                    Position: {
                        X: startX,
                        Y: startY
                    },
                    Size: {
                        Width: endX - startX,
                        Height: endY - startY
                    }
                }});
            }
        });

        app.ticker.add((delta) => {
            var state = store.getState();
            // progress += (delta * 0.1);

            // // var pos = Math.cos(progress);
            // s.x += 0.1;//state.x;
            // if (state.moveY) {
            //     s.y += 0.1;//state.y;
            // }
            let dungeonRooms = [];
            dungeonRooms = state.dungeon.Spaces;

            graphics.clear();

            graphics.beginFill(0xd6d5d5);
            dungeonRooms.forEach(space => {
                graphics.drawRect(
                    space.Position.X * gridSize,
                    space.Position.Y * gridSize,
                    space.Size.Width * gridSize,
                    space.Size.Height * gridSize);
            });
            graphics.endFill();
            graphics.interactive = true;
            
            // graphics.on('mouseup', (sp) => {
            //     console.log(sp.currentTarget.id);
            //     store.dispatch({
            //         type: 'TOGGLE_SELECT'
            //     });
            // });

            // graphics.mouseover = function(mouseData) {
            //     this.alpha = 0.5;
            // };
            // graphics.mouseout = function(mouseData) {
            //     this.alpha = 1;
            // };

            graphics.lineStyle(1.0, 0x444444, 1.0, 0.5);
            for (var i = 0.0; i < 32; i++) {
                graphics.moveTo(i * gridSize, 0);
                graphics.lineTo(i * gridSize, 800);
            }

            for (var j = 0.0; j < 32; j++) {
                graphics.moveTo(0, j * gridSize);
                graphics.lineTo(1000, j * gridSize);
            }

            if (app.renderer.plugins.interaction.mouseOverRenderer) {
                let mousePoint = app.renderer.plugins.interaction.mouse.getLocalPosition(app.stage);

                let snappedX, snappedY, width, height;
                if (state.mouseDown) {
                    let startX = Math.min(state.mouseStartX, mousePoint.x);
                    let startY = Math.min(state.mouseStartY, mousePoint.y);

                    let endX = Math.max(state.mouseStartX, mousePoint.x);
                    let endY = Math.max(state.mouseStartY, mousePoint.y);

                    snappedX = Math.floor(startX / gridSize) * gridSize;
                    snappedY = Math.floor(startY / gridSize) * gridSize;
                    endX = Math.floor(endX / gridSize) * gridSize + gridSize;
                    endY = Math.floor(endY / gridSize) * gridSize + gridSize;
                    width = endX - snappedX;
                    height = endY - snappedY;
                }
                else {
                    // snap to nearest grid point
                    // for now for simplicity let's say top left
                    snappedX = Math.floor(mousePoint.x / gridSize) * gridSize;
                    snappedY = Math.floor(mousePoint.y / gridSize) * gridSize;
                    width = gridSize;
                    height = gridSize;
                }
                // draw a hover rect
                graphics.beginFill(0, 0);
                graphics.lineStyle(1.0, 0xfffd00);
                graphics.drawRect(snappedX, snappedY, width, height);
                graphics.endFill();
            }
        });
    }
}
