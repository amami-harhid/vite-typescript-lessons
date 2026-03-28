import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';

export class GameCharacter {

	public life: number = 1;
	public size: number = 1;

	public sprite!: Three.Sprite;

	constructor() {
	}

	async GetMaterial(dataURI: string) : Promise<Three.SpriteMaterial> {
		const textureLoader:Three.TextureLoader = new THREE.TextureLoader();
		const texture:Three.Texture = await textureLoader.loadAsync(dataURI);
		texture.needsUpdate = true;
		const spriteMaterial:Three.SpriteMaterial = new THREE.SpriteMaterial({map: texture});
		return spriteMaterial;
	}
	public AddScene(scene: Three.Scene): void {
		scene.add(this.sprite);
	}
	public RemoveScene(scene: Three.Scene) {
		scene.remove(this.sprite);
	}
	get X(): number {
		return this.sprite.position.x;
	}
	get Y(): number {
		return this.sprite.position.y;
	}
	get Z(): number {
		return this.sprite.position.z;
	}
	set X(value: number) {
		this.sprite.position.x = value;
	}
	set Y(value: number) {
		this.sprite.position.y = value;
	}
	set Z(value: number) {
		this.sprite.position.z = value;
	}

	VX: number = 0;
	VY: number = 0;
	VZ: number = 0;

	Move(): void {
		this.X += this.VX;
		this.Y += this.VY;
		this.Z += this.VZ;
	}
}