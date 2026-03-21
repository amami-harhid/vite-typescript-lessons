/**
 * 【12-05】2D Game : excalibur
 *  Flying BirdBox
 */
import * as ex from 'excalibur';
import { Ground } from './ground';
import { Bird } from './bird';

const game = new ex.Engine({
    width: 400,
    height: 500,
    backgroundColor: ex.Color.fromHex('#54C0CA'),
    pixelArt: true,
    pixelRatio: 2,
    displayMode: ex.DisplayMode.FitScreen
});

// Birdを生成追加
const bird = new Bird();
game.add( bird );
// Groundを生成追加
const ground = new Ground(ex.vec(0, game.screen.drawHeight - 64));
game.add(ground);

// ゲームスタート
game.start();