/**
 * 【15-03】Three.js(WEBGPU) / 基本編
 *  Shadow(影)
 *  https://ics.media/tutorial-three/light_variation/
 */
import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';
import * as CANVAS from './canvas';
import { meshFloor } from './objects/meshFloor';
import { meshObject } from './objects/meshObject';
import { ambientLight, directionalLight, hemisphereLight, pointLight, spotLight, rectAreaLight } from './objects/light';
import { perspectiveCamera } from './objects/camera';


// レンダーサイズを指定
const width = 960;
const height = 540;

const canvas = CANVAS.createCanvas();

// レンダラーを作成
const renderer: Three.WebGPURenderer = new THREE.WebGPURenderer({
	canvas: canvas,
});
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(width, height);
// レンダラー：シャドウを有効にする
renderer.shadowMap.enabled = true;

// シーンを作成
const scene: Three.Scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// カメラを作成
const camera = perspectiveCamera(width, height);

// 床を作成
const floor = meshFloor();
scene.add(floor);

// 物体を作成
const object = meshObject();
scene.add(object);

// 光
const lightArray: Three.Light[] = [];
lightArray.push(ambientLight());
lightArray.push(directionalLight());
lightArray.push(hemisphereLight());
lightArray.push(pointLight());
lightArray.push(spotLight());
lightArray.push(rectAreaLight());

// ライトを作成
let light = lightArray[0];
scene.add(light);

let changer = false;
let lightIdx = 0;
canvas.addEventListener('click', ()=>{
	changer = true;
	lightIdx += 1;
})

// 毎フレーム時に実行されるループイベントです
renderer.setAnimationLoop(tick);
function tick() {
	if( changer ) {
		const nextLight = lightArray[lightIdx%(lightArray.length)];
		scene.remove(light);
		scene.add(nextLight);
//		scene.add(lightArray[4]);
		light = nextLight;
	}
	// 照明の位置を更新
    const t = Date.now() / 500;
    const r = 20.0;
    const lx = r * Math.cos(t);
    const lz = r * Math.sin(t);
    const ly = 25.0 + 5.0 * Math.sin(t / 3.0);
    light.position.set(lx, ly, lz);

	// 物体を回転
	object.rotation.x += 0.005;
	object.rotation.y += 0.01;
	object.rotation.z += 0.02;
	renderer.render(scene, camera); // レンダリング
}
