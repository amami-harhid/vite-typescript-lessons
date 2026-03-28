import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';
import { JikiBurret } from './jikiBurret';
import { global } from './global';
import { Main } from './main';
import { DataURL } from './dataURL';
export class Jiki {
    Mesh: Three.Mesh;
    LifeMax = 10;
 
    life = 0;
    size = 1.0;
 
    MoveLeft: boolean = false;
    MoveRight: boolean = false;
    MoveFront: boolean = false;
    MoveBack: boolean = false;
 
    constructor() {
        let img = new Image();
        img.src = DataURL.dataURL_Jiki;
        let texture = new THREE.Texture(img);
        texture.needsUpdate = true;
 
        const material = new THREE.MeshStandardMaterial({ map: texture, transparent: true });
 
        let geometry = new THREE.PlaneGeometry(this.size, this.size);
        
        this.Mesh = new THREE.Mesh(geometry, material);
        this.life = this.LifeMax;
    }
 
    Move() {
        if (this.MoveLeft) {
            if (this.X > -4) {
                this.X += -0.1;
                this.Mesh.rotation.set(0, -Math.PI * 2 * 20 / 360, 0);
                return;
            }
        }
        if (this.MoveFront) {
            if (this.Y < 4) {
                this.Y += 0.1;
            }
        }
        if (this.MoveRight) {
            if (this.X < 4) {
                this.X += 0.1;
                this.Mesh.rotation.set(0, Math.PI * 2 * 20 / 360, 0);
                return;
            }
        }
        if (this.MoveBack) {
            if (this.Y > 0) {
                this.Y += -0.1;
            }
        }
        this.Mesh.rotation.set(0, 0, 0);
    }
 
    Shot() {
        let burret = new JikiBurret(this.X, this.Y, this.Z, 0, 0.3, 0);
        global.JikiBurrets.push(burret);
        burret.AddScene(Main.scene);
    }
 
    public AddScene(scene: Three.Scene) {
        scene.add(this.Mesh);
    }
    public RemoveScene(scene: Three.Scene) {
        scene.remove(this.Mesh);
    }
 
    get X() {
        return this.Mesh.position.x;
    }
    get Y() {
        return this.Mesh.position.y
    }
    get Z() {
        return this.Mesh.position.z;
    }
 
    set X(value: number) {
        this.Mesh.position.x = value;
    }
    set Y(value: number) {
        this.Mesh.position.y = value;
    }
    set Z(value: number) {
        this.Mesh.position.z = value;
    }
}