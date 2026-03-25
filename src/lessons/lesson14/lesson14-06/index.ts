/**
 * 【14-06】Three.js(WEBGPU) / 入門
 *  カメラの自動制御
 *  https://ics.media/tutorial-three/camera_orbitcontrols/
 */
import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';
import { OrbitControls } from 'three/examples/jsm/Addons';
import * as CANVAS from './canvas';
import { createShpere } from './geometry/sphere';
import { createStarField } from './starField';

// レンダーサイズを指定
const width = 960;
const height = 840;

const canvas = CANVAS.createCanvas();

// レンダラーを作成
const renderer: Three.WebGPURenderer = new THREE.WebGPURenderer({
	canvas: canvas,
});
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(width, height);

// シーンを作成
const scene: Three.Scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// カメラを作成
const camera: Three.PerspectiveCamera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
camera.position.set(0, 0, 1000);

// カメラコントローラー
const controls = new OrbitControls(camera, canvas);
// 滑らかにカメラコントローラーを制御する
controls.enableDamping = true;
controls.dampingFactor = 0.2;

// 球体を作成
const sphere: Three.Mesh = createShpere();
sphere.position.set( 0, 0, 0);
// シーンに追加
scene.add(sphere);

// 平行光源
const directionalLight: Three.DirectionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(1, 1, 1);
// シーンに追加
scene.add(directionalLight);

const starMesh =  createStarField();
scene.add(starMesh);


// 毎フレーム時に実行されるループイベントです
renderer.setAnimationLoop(tick);
function tick() {
	// カメラコントローラーを更新
	controls.update();
	renderer.render(scene, camera); // レンダリング
}
