/**
 * 【14-02】Three.js(WEBGPU) / 入門
 *  マテリアルとライティング (凸凹がある球体)
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
scene.background = new THREE.Color(0xe0e0e0);

// カメラを作成
const camera: Three.PerspectiveCamera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
camera.position.set(0, 0, +1000);

// 球体を作成
const radius = 250;
const widthSegments = 2;
const heightSegments = 30;
const geometry: Three.SphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
const material: Three.MeshStandardMaterial = new THREE.MeshStandardMaterial({color: 0xffffff});
const sphere: Three.Mesh = new THREE.Mesh(geometry, material);
// シーンに追加
scene.add(sphere);

// 平行光源
const directionalLight: Three.DirectionalLight = new THREE.DirectionalLight(0x00ff00);
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
