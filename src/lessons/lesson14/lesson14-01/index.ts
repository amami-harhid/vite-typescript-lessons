/**
 * 【14-01】Three.js(WEBGPU) / 入門
 *  箱を描画して回転させる。
 *  https://ics.media/tutorial-three/quickstart/
 */
import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';
import * as CANVAS from './canvas';

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

// シーンを作成
const scene: THREE.Scene = new Three.Scene();
scene.background = new Three.Color(0x000000);

// カメラを作成
const camera: THREE.PerspectiveCamera = new Three.PerspectiveCamera(45, width / height);
camera.position.set(0, 0, +1000);

// 箱を作成
const boxX = 400;
const boxY = 400;
const boxZ = 400;
const geometry: THREE.BoxGeometry = new Three.BoxGeometry(boxX, boxY, boxZ);
const material: THREE.MeshNormalMaterial = new Three.MeshNormalMaterial();
const box: THREE.Mesh = new Three.Mesh(geometry, material);
scene.add(box);

 // 毎フレーム時に実行されるループイベントです
 renderer.setAnimationLoop(tick);
 function tick() {
 	box.rotation.y += 0.05;
	renderer.render(scene, camera); // レンダリング
}
