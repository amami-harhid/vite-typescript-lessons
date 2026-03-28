import { EnemyBurret } from "./enemyBurret";
import { Enemy } from "./enemy";
import { Jiki } from "./jiki";
import { JikiBurret } from "./jikiBurret";
import { Explosion } from "./explosion";
enum Status {
    Battle,
    Boss,
    GameOver,
}

let GameStatus: Status = Status.GameOver;
let Stage: number = 1;
let jiki: Jiki = new Jiki();
let JikiBurrets: JikiBurret[] = [];
let Enemies: Enemy[] = [];
let EnemyBurrets: EnemyBurret[] = [];
let Explosions: Explosion[] = [];
 
let CanvasBackColor: string = "black";
export const global = {
    Status: Status,
    GameStatus: GameStatus,
    Stage: Stage,
    jiki: jiki,
    JikiBurrets: JikiBurrets,
    Enemies: Enemies,
    EnemyBurrets: EnemyBurrets,
    Explosions: Explosions,
    CanvasBackColor: CanvasBackColor,

}

