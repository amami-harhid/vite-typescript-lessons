/**
 * 【14-05】Three.js(WEBGPU) / 入門
 *  カメラの制御, マウスの位置に応じてカメラの位置を制御する
 *  https://ics.media/tutorial-three/camera_position/
 */
import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';
import * as CANVAS from './canvas';
import { createShpere } from './geometry/sphere';
import { createStarField } from './starField';

// レンダーサイズを指定
const width = 960;
const height = 840;

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
const camera: THREE.PerspectiveCamera = new Three.PerspectiveCamera(45, width / height, 1, 10000);
camera.position.set(0, 0, +1000);

// 球体を作成
const sphere: THREE.Mesh = createShpere();
sphere.position.set( 0, 0, 0);
// シーンに追加
scene.add(sphere);

// 平行光源
const directionalLight: THREE.DirectionalLight = new Three.DirectionalLight(0xffffff);
directionalLight.position.set(1, 1, 1);
// シーンに追加
scene.add(directionalLight);

const starMesh =  createStarField();
scene.add(starMesh);

let mouseX = 0; // マウス座標
// マウス座標はマウスが動いた時のみ取得できる
document.addEventListener("mousemove", (event) => {
	mouseX = event.pageX;
});

// 毎フレーム時に実行されるループイベントです
let rot = 0;
renderer.setAnimationLoop(tick);
function tick() {
	// マウスの位置に応じて角度を設定
	// マウスのX座標がステージの幅の何%の位置にあるか調べてそれを360度で乗算する
	const targetRot = (mouseX / window.innerWidth) * 360;
	// イージングの公式を用いて滑らかにする
	// 値 += (目標値 - 現在の値) * 減速値
	rot += (targetRot - rot) * 0.01;
	const radian = (rot * Math.PI) / 180; // ラジアンに変換する
	// 角度に応じてカメラの位置を設定
    camera.position.x = 1000 * Math.sin(radian);
    camera.position.z = 1000 * Math.cos(radian);
    // 原点方向を見つめる
    camera.lookAt(new Three.Vector3(0, 0, 0));
	renderer.render(scene, camera); // レンダリング
}
