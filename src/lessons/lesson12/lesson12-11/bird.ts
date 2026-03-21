/**
 * 【Bird】
 */
import * as ex from 'excalibur';
import { Ground } from './ground';
import { Pipe } from './pipe';
import { Level } from './level';
import { Config } from './config';
export class Bird extends ex.Actor {
	private _jumping = false;
	private _playing = false;
	constructor(private level: Level) {
		super({
            // 初期位置
            pos: Config.BirdStartPos,
            //width: 16,
            //height: 16,
            radius: 8,
            color: ex.Color.Yellow,
        });
    }
    override onInitialize(): void {
        this.start();
		this.on('exitviewport', () => {
            this.level.triggerGameOver();
        });
    }
    override onCollisionStart(_self: ex.Collider, other: ex.Collider): void {
        if (other.owner instanceof Ground || other.owner instanceof Pipe) {
            //this.stop();
			this.level.triggerGameOver();
        }
    }
    private isInputActive(engine: ex.Engine) {
        // if the space bar or the first pointer was down
        return (engine.input.keyboard.isHeld(ex.Keys.Space) ||
                engine.input.pointers.isDown(0))
    }
    override onPostUpdate(engine: ex.Engine): void {
		if (!this._playing) return;
        if (!this._jumping && this.isInputActive(engine)) {
            this.vel.y += Config.BirdJumpVelocity; // negative is UP
            this._jumping = true;
        }
        if (!this.isInputActive(engine)) {
            this._jumping = false;
        }
        // keep velocity from getting too big
        this.vel.y = ex.clamp(this.vel.y, Config.BirdMinVelocity, Config.BirdMaxVelocity);
        // The "speed" the bird will move relative to pipes
        this.rotation = ex.vec(Config.PipeSpeed, this.vel.y).toAngle();
    }
    start() {
		this._playing = true;
		this.pos = Config.BirdStartPos; // starting position
		this.acc = ex.vec(0, Config.PipeSpeed); // pixels per second per second
	}
	reset() {
		this.pos = Config.BirdStartPos; // starting position
		this.stop();
	}
    stop() {
		this._playing = false;
        this.vel = ex.vec(0, 0);
        this.acc = ex.vec(0, 0)        
    }
    get jumping() {
        return this._jumping;
    }
    get playing() {
        return this._playing;
    }
};