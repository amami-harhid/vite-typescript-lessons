/**
 * 【14-02】Three.js(WEBGPU) / 入門
 *  マテリアルとライティング (凸凹がある球体)
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
scene.background = new Three.Color(0xe0e0e0);

// カメラを作成
const camera: THREE.PerspectiveCamera = new Three.PerspectiveCamera(45, width / height, 1, 10000);
camera.position.set(0, 0, +1000);

// 球体を作成
const radius = 250;
const widthSegments = 2;
const heightSegments = 30;
const geometry: THREE.SphereGeometry = new Three.SphereGeometry(radius, widthSegments, heightSegments);
const material: THREE.MeshStandardMaterial = new Three.MeshStandardMaterial({color: 0xffffff});
const sphere: THREE.Mesh = new Three.Mesh(geometry, material);
// シーンに追加
scene.add(sphere);

// 平行光源
const directionalLight: THREE.DirectionalLight = new Three.DirectionalLight(0x00ff00);
directionalLight.position.set(1, 1, 1);
// シーンに追加
scene.add(directionalLight);

 // 毎フレーム時に実行されるループイベントです
 renderer.setAnimationLoop(tick);
 function tick() {
 	sphere.rotation.x += 0.05;
 	sphere.rotation.y += 0.01;
	renderer.render(scene, camera); // レンダリング
}
