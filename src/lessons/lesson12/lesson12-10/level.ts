import * as ex from 'excalibur';
import { Bird } from './bird';
import { Ground } from './ground';
import { Pipe } from './pipe';
import { PipeFactory } from './pipe-factory';
import { Config } from './config';

export class Level extends ex.Scene {
	private score: number = 0;
	private best: number = 0;
	private scoreLabel = new ex.Label({
		text: 'Score: 0',
		x: 0,
		y: 0,
		z: 1,
		font: new ex.Font({
			size: 20,
			color: ex.Color.White
        })
    });
	private bestLabel = new ex.Label({
		text: 'Best: 0',
		x: 400,
		y: 0,
		z: 1,
		font: new ex.Font({
			size: 20,
			color: ex.Color.White,
			textAlign: ex.TextAlign.End
		})
	});
	private random = new ex.Random();
	private pipeFactory = new PipeFactory(this, this.random, Config.PipeInterval);
	private bird: Bird = new Bird();
	private ground!: Ground;
    override onInitialize(engine: ex.Engine): void {
		
		this.add(this.scoreLabel);
		this.add(this.bestLabel);
		const bestScore = localStorage.getItem('bestScore');
		if (bestScore) {
			this.best = +bestScore;
			this.setBestScore(this.best);
		}else{
			this.setBestScore(0);
		}
        this.add(this.bird);
        this.ground = new Ground(ex.vec(0, engine.screen.drawHeight - 64))
        this.add(this.ground);
        const topPipe = new Pipe(ex.vec(engine.screen.drawWidth, 150), 'top');
        this.add(topPipe);
        const bottomPipe = new Pipe(ex.vec(engine.screen.drawWidth, 300), 'bottom');
        this.add(bottomPipe);

        this.pipeFactory.start();
    }
	incrementScore() {
		this.scoreLabel.text = `Score: ${++this.score}`;
		this.setBestScore(this.score);
	}
	setBestScore(score: number) {
		if (score > this.best) {
			localStorage.setItem('bestScore', this.score.toString());
			this.best = score;
		}
		this.bestLabel.text = `Best: ${this.best}`;
	}
}