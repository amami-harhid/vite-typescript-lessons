/**
 * 【12-11】2D Game : excalibur
 *  Game Over
 */
import * as ex from 'excalibur';
import { Level } from './level';

const game = new ex.Engine({
    width: 400,
    height: 500,
    backgroundColor: ex.Color.fromHex('#54C0CA'),
    pixelArt: true,
    pixelRatio: 2,
    displayMode: ex.DisplayMode.FitScreen,
    scenes: { 
        Level01: Level 
    },
});

// ゲームスタート
game.start().then(() => {
    game.goToScene('Level01');
});