import React from 'react'
import * as PIXI from 'pixi.js'
import store from './Store.js'

export default class DungeonEditor extends React.Component {
    render() {
        return <div ref={(element) => this.canvasDiv = element}></div>
    }

    componentDidMount() {
        const app = new PIXI.Application({
            backgroundColor: 0xaaaaff,
            width: 500 * 2,
            height: 400 * 2,
            sharedLoader: true,
            sharedTicker: true
        });
        this.app = app;

        this.canvasDiv.appendChild(app.view);

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

        let progress = 0;
        let gridSize = 20;
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

            graphics.beginFill(0x00ffff);
            dungeonRooms.forEach(space => {
                graphics.drawRect(
                    space.Position.X * gridSize,
                    space.Position.Y * gridSize,
                    space.Size.Width * gridSize,
                    space.Size.Height * gridSize);
            });
            graphics.endFill();
            graphics.interactive = true;
            
            graphics.on('mouseup', (sp) => {
                console.log(sp.currentTarget.id);
                store.dispatch({
                    type: 'TOGGLE_SELECT'
                });
            });

            graphics.mouseover = function(mouseData) {
                this.alpha = 0.5;
            };
            graphics.mouseout = function(mouseData) {
                this.alpha = 1;
            };
        });
    }
}