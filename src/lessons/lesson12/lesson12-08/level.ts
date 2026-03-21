import * as ex from 'excalibur';
import { Bird } from './bird';
import { Ground } from './ground';
import { Pipe } from './pipe';

export class Level extends ex.Scene {
    private bird: Bird = new Bird();
    #ground!: Ground;
    override onInitialize(engine: ex.Engine): void {
        this.add(this.bird);
        this.#ground = new Ground(ex.vec(0, engine.screen.drawHeight - 64))
        this.add(this.#ground);
        const topPipe = new Pipe(ex.vec(engine.screen.drawWidth, 150), 'top');
        this.add(topPipe);
        const bottomPipe = new Pipe(ex.vec(engine.screen.drawWidth, 300), 'bottom');
        this.add(bottomPipe);
    }
}