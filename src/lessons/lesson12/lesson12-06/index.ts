/**
 * 【12-06】2D Game : excalibur
 *  Pipe
 */
import * as ex from 'excalibur';
import { Ground } from './ground';
import { Bird } from './bird';
import { Pipe } from './pipe';

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

const topPipe = new Pipe(ex.vec(game.screen.drawWidth, 150), 'top');
game.add(topPipe);

const bottomPipe = new Pipe(ex.vec(game.screen.drawWidth, 300), 'bottom');
game.add(bottomPipe);

// ゲームスタート
game.start();