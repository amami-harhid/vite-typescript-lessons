import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';
import { GameCharacter } from './gameCharacter';
import { EnemyBurret } from './enemyBurret';
import { DataURL } from './dataURL';
import { global } from './global';
import { Main } from './main';

export class Enemy extends GameCharacter {
    score: number = 40;
}

export class Enemy1 extends Enemy {
    static enemyMaterial10: Three.SpriteMaterial;
    static enemyMaterial11: Three.SpriteMaterial;
    static enemyMaterial12: Three.SpriteMaterial;
    static enemyMaterial13: Three.SpriteMaterial;
    moveCount: number = 0;
    moveRight: boolean = false;
    constructor() {
        super();
        this.init();
    }
    async init() {
        // ピンク色のやさぐれひよこを使う
        if (Enemy1.enemyMaterial10 == undefined)
            Enemy1.enemyMaterial10 = await this.GetMaterial(DataURL.dataURL_Enemy10);
        if (Enemy1.enemyMaterial11 == undefined)
            Enemy1.enemyMaterial11 = await this.GetMaterial(DataURL.dataURL_Enemy11);
        if (Enemy1.enemyMaterial12 == undefined)
            Enemy1.enemyMaterial12 = await this.GetMaterial(DataURL.dataURL_Enemy12);
        if (Enemy1.enemyMaterial13 == undefined)
            Enemy1.enemyMaterial13 = await this.GetMaterial(DataURL.dataURL_Enemy13);

        this.sprite = new THREE.Sprite(Enemy1.enemyMaterial10);
        this.life = 3;
        this.score = 40;
 
		//最初の出現場所のY座標は30とし、X座標は乱数で決める
        this.X = Math.random() * 12 - 6;
        this.Y = 30;
        this.Z = 0;
 
		//最初の横の移動は右か左かも乱数で決める
        if (Math.random() > 0.5)
            this.moveRight = true;
    }
    Move() {
        this.moveCount++;
        let additions: number = global.Stage;
        if (global.GameStatus == global.Status.GameOver)
            additions = 0;
 
        this.VY = -0.1 - 0.01 * additions;
 
        if (this.moveRight && this.X > 8)
            this.moveRight = false;
        else if (!this.moveRight && this.X < -8)
            this.moveRight = true;
 
        this.VX = 0.1 + 0.02 * additions;
        if (!this.moveRight)
            this.VX *= -1;
 
        let a: number = 60 - 5 * additions;
        if (a < 20)
            a = 20;
        if (this.moveCount % a == 0 && Math.random() > 0.5 && this.Y > 2)
            this.Shot();
 
        let i = this.moveCount % 32;
        if (i < 8)
            this.sprite.material = Enemy1.enemyMaterial10;
        else if (i < 16)
            this.sprite.material = Enemy1.enemyMaterial11;
        else if (i < 24)
            this.sprite.material = Enemy1.enemyMaterial12;
        else
            this.sprite.material = Enemy1.enemyMaterial13;
 
        super.Move();
    }
    Shot() {
		// ゲームオーバー以降のデモ画面では弾丸は発射しない
        if (global.GameStatus == global.Status.GameOver)
            return;
 
        let x = global.jiki.X - this.X;
        let y = global.jiki.Y - this.Y;
        let angle1 = Math.atan2(y, x);
 
        let speed = 0.15 + 0.01 * global.Stage;
        let burret = new EnemyBurret(this.X, this.Y, this.Z, Math.cos(angle1) * speed, Math.sin(angle1) * speed, 0);
        global.EnemyBurrets.push(burret);
        burret.AddScene(Main.scene);
    }
};

export class Enemy2 extends Enemy {
    static enemyMaterial20: Three.SpriteMaterial;
    static enemyMaterial21: Three.SpriteMaterial;
    static enemyMaterial22: Three.SpriteMaterial;
    static enemyMaterial23: Three.SpriteMaterial;
 
    constructor() {
        super();
        this.init();
    }
    async init() {
		// 黄色のやさぐれひよこを使う
        if (Enemy2.enemyMaterial20 == null)
            Enemy2.enemyMaterial20 = await this.GetMaterial(DataURL.dataURL_Enemy20);
        if (Enemy2.enemyMaterial21 == null)
            Enemy2.enemyMaterial21 = await this.GetMaterial(DataURL.dataURL_Enemy21);
        if (Enemy2.enemyMaterial22 == null)
            Enemy2.enemyMaterial22 = await this.GetMaterial(DataURL.dataURL_Enemy22);
        if (Enemy2.enemyMaterial23 == null)
            Enemy2.enemyMaterial23 = await this.GetMaterial(DataURL.dataURL_Enemy23);
 
        this.sprite = new THREE.Sprite(Enemy2.enemyMaterial20);
 
        this.life = 1;
        this.score = 40;
 
        this.X = Math.random() * 12 - 6;
        this.Y = 30;
        this.Z = 0;
 
        if (Math.random() > 0.5)
            this.moveRight = true;
    }
    away: boolean = false;
    moveRight: boolean = false;
    moveCount: number = 0;
    Move() {
        this.moveCount++;
 
        if (this.Y < 8) {
            this.away = true;
            this.Shot();
        }
        if (this.away)
            this.VY = 0.3;
        else
            this.VY = -0.3;
 
        let additions: number = global.Stage;
        if (global.GameStatus == global.Status.GameOver)
            additions = 0;
 
        if (this.moveRight && this.X > 8)
            this.moveRight = false;
        else if (!this.moveRight && this.X < -8)
            this.moveRight = true;
 
        this.VX = 0.1 + 0.02 * additions;
        if (!this.moveRight)
            this.VX *= -1;
 
        let i = this.moveCount % 32;
        if (i < 8)
            this.sprite.material = Enemy2.enemyMaterial20;
        else if (i < 16)
            this.sprite.material = Enemy2.enemyMaterial21;
        else if (i < 24)
            this.sprite.material = Enemy2.enemyMaterial22;
        else
            this.sprite.material = Enemy2.enemyMaterial23;
 
        super.Move();
    }
 
    Shot() {
        if (global.GameStatus == global.Status.GameOver)
            return;
 
        let x = global.jiki.X - this.X;
        let y = global.jiki.Y - this.Y;
        let angle1 = Math.atan2(y, x);
        let angle2 = angle1 + 0.3;
        let angle3 = angle1 - 0.3;
 
        let speed = 0.1 + 0.01 * global.Stage;
 
        let burret1 = new EnemyBurret(this.X, this.Y, this.Z, Math.cos(angle1) * speed, Math.sin(angle1) * speed, 0);
        global.EnemyBurrets.push(burret1);
        burret1.AddScene(Main.scene);
 
        let burret2 = new EnemyBurret(this.X, this.Y, this.Z, Math.cos(angle2) * speed, Math.sin(angle2) * speed, 0);
        global.EnemyBurrets.push(burret2);
        burret2.AddScene(Main.scene);
 
        let burret3 = new EnemyBurret(this.X, this.Y, this.Z, Math.cos(angle3) * speed, Math.sin(angle3) * speed, 0);
        global.EnemyBurrets.push(burret3);
        burret3.AddScene(Main.scene);
    }
}