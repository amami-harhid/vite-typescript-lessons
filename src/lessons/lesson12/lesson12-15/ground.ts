/**
 * 【Ground】
 */
import * as ex from 'excalibur';
import { Config } from './config';
import { Resources } from './resources';
export class Ground extends ex.Actor {
    private _moving:boolean = false;
    private groundSprite = Resources.GroundImage.toSprite();
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
    onInitialize(engine: ex.Engine): void {
        this.groundSprite.sourceView.width = engine.screen.drawWidth;
        this.groundSprite.destSize.width = engine.screen.drawWidth;
        this.graphics.use(this.groundSprite);
    }
    onPostUpdate(_engine: ex.Engine, elapsedMs: number): void {
        if (!this._moving) return;
        this.groundSprite.sourceView.x += Config.PipeSpeed * (elapsedMs / 1000);
        this.groundSprite.sourceView.x = this.groundSprite.sourceView.x % Resources.GroundImage.width;
    }
};
