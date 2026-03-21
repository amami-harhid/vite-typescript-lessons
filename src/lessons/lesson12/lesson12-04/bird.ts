/**
 * 【Bird】
 */
import * as ex from 'excalibur';
import { Ground } from './ground';

export const Bird = class extends ex.Actor {
    constructor() {
        super({
            // 初期位置
            pos: ex.vec(200, 400),
            width: 16,
            height: 16,
            color: ex.Color.Yellow,
        });
    }
    override onInitialize(): void {
        this.start();
    }
    override onCollisionStart(_self: ex.Collider, other: ex.Collider): void {
        if (other.owner instanceof Ground) {
            this.stop();
        }
    }
    start() {
        this.acc = ex.vec(0, 1200); // pixels per second per second
	}
    stop() {
        this.vel = ex.vec(0, 0);
        this.acc = ex.vec(0, 0)        
    }
};
