/**
 * 【Bird】
 */
import * as ex from 'excalibur';

export const Bird = class extends ex.Actor {
    constructor() {
        super({
            // 初期位置
            pos: ex.vec(200, 300),
            width: 16,
            height: 16,
            color: ex.Color.Yellow,
        });
    }

};
