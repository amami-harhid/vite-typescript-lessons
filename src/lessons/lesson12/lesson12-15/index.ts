/**
 * 【12-15】2D Game : excalibur
 *  Sound load & play
 */
import * as ex from 'excalibur';
import { Level } from './level';
import { Resources } from './resources';

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

const loader = new ex.Loader(Object.values(Resources));

// ゲームスタート
game.start(loader).then(() => {
    game.goToScene('Level01');
});