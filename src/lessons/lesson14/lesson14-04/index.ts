/**
 * 【14-04】Three.js(WEBGPU) / 入門
 *  カメラの制御, テキスチャーのロード
 *  https://ics.media/tutorial-three/camera_position/
 */
import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';
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
scene.background = new THREE.Color(0x101010);

// カメラを作成
const camera: Three.PerspectiveCamera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
camera.position.set(0, 0, +1000);

// 球体を作成
const sphere: Three.Mesh = createShpere();
sphere.position.set( 0, 0, 0);
// シーンに追加
scene.add(sphere);

// 平行光源
const directionalLight: Three.DirectionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(5, 0, 2);
directionalLight.intensity = 5;
// シーンに追加
scene.add(directionalLight);

const starMesh =  createStarField();
scene.add(starMesh);

 // 毎フレーム時に実行されるループイベントです
 let rot = 0;
 renderer.setAnimationLoop(tick);
 function tick() {
	rot += 0.1; // 毎フレーム角度を0.1度ずつ足していく
	const radian = (rot * Math.PI) / 180; // ラジアンに変換する
	// 角度に応じてカメラの位置を設定
	const distance = 1000;
    camera.position.x = distance * Math.sin(radian);
    camera.position.z = distance * Math.cos(radian);
	sphere.rotateY(-0.05);
    // 原点方向を見つめる
    camera.lookAt(new THREE.Vector3(0, 0, 0));
	renderer.render(scene, camera); // レンダリング
}
