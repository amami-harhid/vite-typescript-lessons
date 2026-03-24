/**
 * 【15-05】Three.js(WEBGPU) / 基本編
 *  Fog ( 遠くの物体が霞む効果 )
 *  https://ics.media/tutorial-three/camera_variation/
 */
import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';
import * as CANVAS from './canvas';
import { meshObjects } from './objects/meshObjects';
import { directionalLight, ambientLight } from './objects/light';
import { perspectiveCamera } from './objects/camera';
import { fog } from './objects/fog';

// レンダーサイズを指定
const width = 960;
const height = 540;

const canvas = CANVAS.createCanvas();

// レンダラーを作成
const renderer: THREE.WebGPURenderer = new Three.WebGPURenderer({
	canvas: canvas,
	antialias: true,
	devicePixelRatio: devicePixelRatio,
});
renderer.setSize(width, height);

// シーンを作成
const scene: THREE.Scene = new Three.Scene();
scene.background = new Three.Color(0x000000);

scene.fog = fog();


// カメラを作成
const camera = perspectiveCamera(width, height);

// グループを作成
const group: THREE.Group = new Three.Group();
scene.add(group);

// 物体を作成
const objects:THREE.Mesh[] = meshObjects();
for(const _mesh of objects){
	group.add(_mesh);
}

// ライトを作成
scene.add(directionalLight());
scene.add(ambientLight());

const rotationX : number[] = [];
const rotationY : number[] = [];
for(let _ in group.children){
	rotationX.push(Math.random()/20);
	rotationY.push(Math.random()/20);
}


// 毎フレーム時に実行されるループイベントです
renderer.setAnimationLoop(tick);
function tick() {
	//group.rotateX(0.01);
	//group.rotateY(0.01);
	group.rotateZ(0.01);
	for(const idx in group.children){
		const mesh = group.children[idx];
		mesh.rotation.x -= rotationX[idx];
		mesh.rotation.y -= rotationY[idx];
	}
	renderer.render(scene, camera); // レンダリング
}
