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
        let gridSize = 20;
        // var gridOverlay = PIXI.Texture.from('/textures/grid-tile-overlay.png');
        // var tilingSprite = new PIXI.TilingSprite(gridOverlay, 800, 600);
        // tilingSprite.tileScale.set(gridSize / 128);
        // app.stage.addChild(tilingSprite);
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

            graphics.position.set(0,0);
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

            graphics.lineStyle(1, 0x000000, 1, 0.5);
            for (var i = 0; i < 32; i++) {
                graphics.moveTo(i * gridSize, 0);
                graphics.lineTo(i * gridSize, 400);
            }

            for (var j = 0; j < 32; j++) {
                graphics.moveTo(0, j * gridSize);
                graphics.lineTo(400, j * gridSize);
            }
        });
    }
}