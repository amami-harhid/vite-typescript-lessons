import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';
import { GameCharacter } from './gameCharacter';
import { DataURL } from './dataURL';

export class JikiBurret extends GameCharacter {
    static BurretMaterial: Three.SpriteMaterial;
 
    constructor(x: number, y: number, z: number, vx: number, vy: number, vz: number) {
        super();
        this.init(x, y, z, vx, vy, vz);
    }
    async init(x: number, y: number, z: number, vx: number, vy: number, vz: number) {
        if (JikiBurret.BurretMaterial == undefined) {
            JikiBurret.BurretMaterial = await this.GetMaterial(DataURL.dataURL_JikiBurret);
        }
 
        this.sprite = new THREE.Sprite(JikiBurret.BurretMaterial);
        this.size = 0.3;
        this.sprite.scale.set(this.size, this.size, this.size);
        this.life = 1;
        this.sprite.position.set(x, y, z);
        this.VX = vx;
        this.VY = vy;
        this.VZ = vz;

    }
}