/**
 * 【Pipe】
 */
import * as ex from 'excalibur';
import { Config } from './config';
import { Resources } from './resources';

export const Pipe = class extends ex.Actor {

    constructor(pos: ex.Vector, public type: 'top' | 'bottom') {
        super({
            // 初期位置
            pos: pos,
            width: 32,
            height: 1000,
            anchor: type === 'bottom' ?
                ex.vec(0, 0) : // bottom anchor from top left
                ex.vec(0, 1), // top anchor from the bottom left
            color: ex.Color.Green,
            vel: ex.vec(-Config.PipeSpeed, 0),
            z: -1 // position the pipe under everything
        });
        this.on('exitviewport', () => this.kill());
    }
    onInitialize(): void {
        const pipeEnd = Resources.PipeImage.toSprite();
        pipeEnd.sourceView.height = 1000;
        pipeEnd.destSize.height = 1000;
        if (this.type === 'top') {
            pipeEnd.flipVertical = true;
        }
        this.graphics.use(pipeEnd);
    }
};
