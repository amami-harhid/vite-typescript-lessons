/**
 * 【15-05】Three.js(WEBGPU) / 基本編
 *  Fog ( 遠くの物体が霞む効果 )
 *  https://ics.media/tutorial-three/camera_variation/
 */
import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';
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
const renderer: Three.WebGPURenderer = new THREE.WebGPURenderer({
	canvas: canvas,
	antialias: true,
	devicePixelRatio: devicePixelRatio,
});
renderer.setSize(width, height);

// シーンを作成
const scene: Three.Scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

scene.fog = fog();


// カメラを作成
const camera = perspectiveCamera(width, height);

// グループを作成
const group: Three.Group = new THREE.Group();
scene.add(group);

// 物体を作成
const objects:Three.Mesh[] = meshObjects();
for(const _mesh of objects){
	group.add(_mesh);
}

// ライトを作成
scene.add(directionalLight());
scene.add(ambientLight());

const rotationX : number[] = [];
const rotationY : number[] = [];
for(let _ in group.children){
	rotationX.push(Math.random()/10);
	rotationY.push(Math.random()/10);
}


// 毎フレーム時に実行されるループイベントです
renderer.setAnimationLoop(tick);
let time = 0;
function tick() {
	time += 1;
	time = time % 500;
	group.rotateX((time>150)?0.01:-0.01); // X軸の回転(group全体)
	group.rotateY((time>250)?0.01:-0.01); // Y軸の回転(group全体)
	group.rotateZ((time>350)?0.01:-0.01); // Z軸の回転(group全体)
	for(const idx in group.children){
		const mesh = group.children[idx];
		mesh.rotation.x -= rotationX[idx];
		mesh.rotation.y -= rotationY[idx];
	}
	renderer.render(scene, camera); // レンダリング
}
