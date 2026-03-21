/**
 * 【12-02】2D Game : excalibur
 *  Game Screenを作る
 */
import { Engine, Color, DisplayMode } from 'excalibur';

const game = new Engine({
    width: 400,
    height: 500,
    backgroundColor: Color.fromHex('#54C0CA'),
    pixelArt: true,
    pixelRatio: 2,
    displayMode: DisplayMode.FitScreen
});

game.start();