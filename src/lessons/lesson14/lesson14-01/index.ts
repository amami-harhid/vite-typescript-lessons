/**
 * 【14-01】Three.js(WEBGPU) / 入門
 *  箱を描画して回転させる。
 *  https://ics.media/tutorial-three/quickstart/
 */
import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';
import * as CANVAS from './canvas';

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

// シーンを作成
const scene: Three.Scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// カメラを作成
const camera: Three.PerspectiveCamera = new THREE.PerspectiveCamera(45, width / height);
camera.position.set(0, 0, +1000);

// 箱を作成
const boxX = 400;
const boxY = 400;
const boxZ = 400;
const geometry: Three.BoxGeometry = new THREE.BoxGeometry(boxX, boxY, boxZ);
const material: Three.MeshNormalMaterial = new THREE.MeshNormalMaterial();
const box: Three.Mesh = new THREE.Mesh(geometry, material);
scene.add(box);

 // 毎フレーム時に実行されるループイベントです
 renderer.setAnimationLoop(tick);
 function tick() {
 	box.rotation.y += 0.05;
	renderer.render(scene, camera); // レンダリング
}
