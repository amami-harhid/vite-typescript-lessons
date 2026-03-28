import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';
import { GameCharacter } from './gameCharacter';
import { DataURL } from './dataURL';

export class Explosion extends GameCharacter {
    static explosionMaterial0: Three.SpriteMaterial;
    static explosionMaterial1: Three.SpriteMaterial;
    static explosionMaterial2: Three.SpriteMaterial;
    static explosionMaterial3: Three.SpriteMaterial;
    static explosionMaterial4: Three.SpriteMaterial;
    static explosionMaterial5: Three.SpriteMaterial;
 
    constructor(x: number, y: number, vx: number, vy: number, vz: number, size: number) {
        super();
        this.init(x, y, vx, vy, vz, size);
    }
    async init(x: number, y: number, vx: number, vy: number, vz: number, size: number) {
        if (Explosion.explosionMaterial0 == undefined)
            Explosion.explosionMaterial0 = await this.GetMaterial(DataURL.dataURL_Explosion0);
        if (Explosion.explosionMaterial1 == undefined)
            Explosion.explosionMaterial1 = await this.GetMaterial(DataURL.dataURL_Explosion1);
        if (Explosion.explosionMaterial2 == undefined)
            Explosion.explosionMaterial2 = await this.GetMaterial(DataURL.dataURL_Explosion2);
        if (Explosion.explosionMaterial3 == undefined)
            Explosion.explosionMaterial3 = await this.GetMaterial(DataURL.dataURL_Explosion3);
        if (Explosion.explosionMaterial4 == undefined)
            Explosion.explosionMaterial4 = await this.GetMaterial(DataURL.dataURL_Explosion4);
        if (Explosion.explosionMaterial5 == undefined)
            Explosion.explosionMaterial5 = await this.GetMaterial(DataURL.dataURL_Explosion5);
 
        this.sprite = new THREE.Sprite(Explosion.explosionMaterial0);
        if(this.sprite){
            if (typeof size !== 'undefined')
                this.sprite.scale.set(size, size, size);
        }
 
        this.life = 1;
        this.X = x;
        this.Y = y;
        this.Z = 0;
 
        this.VX = vx;
        this.VY = vy;
        this.VZ = vz;

    }
    moveCount: number = 0;
    Move() {
        this.moveCount++;
 
        let i = this.moveCount % 60;
        if (i < 4)
            this.sprite.material = Explosion.explosionMaterial0;
        else if (i < 8)
            this.sprite.material = Explosion.explosionMaterial1;
        else if (i < 12)
            this.sprite.material = Explosion.explosionMaterial2;
        else if (i < 16)
            this.sprite.material = Explosion.explosionMaterial3;
        else if (i < 20)
            this.sprite.material = Explosion.explosionMaterial4;
        else if (i < 24)
            this.sprite.material = Explosion.explosionMaterial5;
        else
            this.life = 0;
        super.Move();
    }
}