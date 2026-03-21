/**
 * 【Bird】
 */
import * as ex from 'excalibur';
import { Ground } from './ground';
import { Pipe } from './pipe';

export const Bird = class extends ex.Actor {
    private _jumping = false;
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
        if (other.owner instanceof Ground || other.owner instanceof Pipe) {
            this.stop();
        }
    }
    private isInputActive(engine: ex.Engine) {
        // if the space bar or the first pointer was down
        return (engine.input.keyboard.isHeld(ex.Keys.Space) ||
                engine.input.pointers.isDown(0))
    }
    override onPostUpdate(engine: ex.Engine): void {
        if (!this._jumping && this.isInputActive(engine)) {
            this.vel.y += -100; // negative is UP
            this._jumping = true;
        }
        if (!this.isInputActive(engine)) {
            this._jumping = false;
        }
        // keep velocity from getting too big
        this.vel.y = ex.clamp(this.vel.y, -100, 100);
        // The "speed" the bird will move relative to pipes
        this.rotation = ex.vec(200, this.vel.y).toAngle();
    }
    start() {
        this.acc = ex.vec(0, 1200); // pixels per second per second
	}
    stop() {
        this.vel = ex.vec(0, 0);
        this.acc = ex.vec(0, 0)        
    }
    get jumping() {
        return this._jumping;
    }
};
