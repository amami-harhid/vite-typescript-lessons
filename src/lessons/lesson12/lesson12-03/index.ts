/**
 * 【12-03】2D Game : excalibur
 *  登場キャラクター(Bird)を表示（ここでは黄色い四角)
 */
import * as ex from 'excalibur';
import { Bird } from './bird';

const game = new ex.Engine({
    width: 400,
    height: 500,
    backgroundColor: ex.Color.fromHex('#54C0CA'),
    pixelArt: true,
    pixelRatio: 2,
    displayMode: ex.DisplayMode.FitScreen
});

// Birdを生成、Gameに追加
const bird = new Bird();
game.add( bird );
// ゲームスタート
game.start();