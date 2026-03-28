import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';
import { GameCharacter } from './gameCharacter';
import { DataURL } from './dataURL';

export class EnemyBurret extends GameCharacter {
    static enemyBurretMaterial0: Three.SpriteMaterial;
    static enemyBurretMaterial1: Three.SpriteMaterial;
 
	// コンストラクタで弾丸の出現位置、移動量、移動方向をセットする
    constructor(x: number, y: number, z: number, vx: number, vy: number, vz: number) {
        super();
        this.init(x, y, z, vx, vy, vz);
    }
    async init(x: number, y: number, z: number, vx: number, vy: number, vz: number) {
        if (EnemyBurret.enemyBurretMaterial0 == undefined)
            EnemyBurret.enemyBurretMaterial0 = await this.GetMaterial(DataURL.dataURL_EnemyBurret0);
        if (EnemyBurret.enemyBurretMaterial1 == undefined)
            EnemyBurret.enemyBurretMaterial1 = await this.GetMaterial(DataURL.dataURL_EnemyBurret1);
 
        this.sprite = new THREE.Sprite(EnemyBurret.enemyBurretMaterial0);
 
        this.life = 1;
        this.size = 0.3;
        this.X = x;
        this.Y = y;
        this.Z = z;
 
        this.VX = vx;
        this.VY = vy;
        this.VZ = vz;

    }
    moveCount: number = 0;
    Move() {
        this.moveCount++;
        super.Move();

        if(this.sprite){
            let i = this.moveCount % 16;
            if (i < 8) {
                this.sprite.material = EnemyBurret.enemyBurretMaterial0;
                this.sprite.scale.set(this.size, this.size, this.size);
            }
            else {
                this.sprite.material = EnemyBurret.enemyBurretMaterial1;
                this.sprite.scale.set(this.size * 1.5, this.size * 1.5, this.size * 1.5);
            }
        }
    }
}