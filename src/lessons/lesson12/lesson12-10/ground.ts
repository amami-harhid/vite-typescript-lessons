/**
 * 【Ground】
 */
import * as ex from 'excalibur';
export class Ground extends ex.Actor {
    private _moving:boolean = false;
    constructor(pos: ex.Vector) {
        super({
            pos: pos,
            anchor: ex.vec(0, 0),
            width: 400,
            height: 64,
            color: ex.Color.fromHex('#bd9853'),
            z: 1 // 1つ上に表示
        });
    }
    start() {
        this._moving = true;
    }
    stop() {
        this._moving = false;
    }
    get moving() {
        return this._moving;
    }
};
