/**
 * 【15-03】Three.js(WEBGPU) / 基本編
 *  Camera(PerspectiveCamera/OrthographicCamera)
 *  https://ics.media/tutorial-three/camera_variation/
 */
import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';
import * as CANVAS from './canvas';
import { meshFloor } from './objects/meshFloor';
import { meshObjects } from './objects/meshObject';
import { spotLight } from './objects/light';
import { perspectiveCamera, orthographicCamera } from './objects/camera';


// レンダーサイズを指定
const width = 960;
const height = 540;

const canvas = CANVAS.createCanvas();

// レンダラーを作成
const renderer: THREE.WebGPURenderer = new Three.WebGPURenderer({
	canvas: canvas,
});
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(width, height);
// レンダラー：シャドウを有効にする
renderer.shadowMap.enabled = true;

// シーンを作成
const scene: THREE.Scene = new Three.Scene();
scene.background = new Three.Color(0x000000);

// カメラを作成
const cameraArray : THREE.Camera[] = [];
const _perspectiveCamera = perspectiveCamera(width, height);
cameraArray.push(_perspectiveCamera);
const _orthographicCamera = orthographicCamera(width,height);
cameraArray.push(_orthographicCamera);

// 床を作成
const floor = meshFloor();
scene.add(floor);

// 物体を作成
const objects:THREE.Mesh[] = meshObjects();
for(const _mesh of objects){
	scene.add(_mesh);
}

// ライトを作成
let light = spotLight();
scene.add(light);

let changer = false;
let cameraIdx = 0;
canvas.addEventListener('click', ()=>{
	changer = true;
	cameraIdx = (cameraIdx+1)%2;
})


// 毎フレーム時に実行されるループイベントです
renderer.setAnimationLoop(tick);
function tick() {
	const camera = (changer)? cameraArray[(cameraIdx-1)%2]: cameraArray[cameraIdx];
	changer = false;
	// 角度に応じてカメラの位置を設定
    const t = Date.now() / 2000;
	camera.position.x = 2000 * Math.sin(t);
	camera.position.y = 250;
	camera.position.z = 500 * Math.cos(Date.now() / 2000);
	// 原点方向を見つめる
	camera.lookAt(new Three.Vector3(0, 0, 0));

	renderer.render(scene, camera); // レンダリング
}
