/**
 * 【15-01】Three.js(WEBGPU) / 基本編
 *  マテリアル　MeshBasicMaterial
 *  https://ics.media/tutorial-three/material_variation/
 */
import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';
import * as CANVAS from './canvas';
import { createTorusMeshBasic } from './geometry/torusMeshBasic';
import { createTorusMeshNormal } from './geometry/torusMeshNormal';
import { createTorusMeshLambert } from './geometry/torusMeshLambert';
import { createTorusMeshPhong } from './geometry/torusMeshPhong';
import { createTrustMeshToon } from './geometry/torusMeshToon';
import { createTrustMeshStandard } from './geometry/torusMeshStandard';
import { createTrustMeshStandardBird } from './geometry/torusMeshStandardBird';

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
scene.background = new Three.Color(0x303030);

// カメラを作成
const camera: THREE.PerspectiveCamera = new Three.PerspectiveCamera(45, width / height);
camera.position.set(0, 0, +1000);

// 平行光源
const directionalLight:THREE.DirectionalLight = new Three.DirectionalLight(0xffffff);
directionalLight.position.set(-350, 100, 100);
directionalLight.lookAt(0,0,0);
scene.add(directionalLight);

// ポイント光源
const pointLight:THREE.PointLight = new Three.PointLight(0xffffff, 2, 1000);
pointLight.position.set( -350, 350, 350 );
scene.add(pointLight);
const pointLightHelper:THREE.PointLightHelper = new Three.PointLightHelper(pointLight, 30);
scene.add(pointLightHelper);

const meshArray:THREE.Mesh[] = []
// Torusを作成
const torusMeshBasic = createTorusMeshBasic();
meshArray.push(torusMeshBasic);
const torusMeshNormal = createTorusMeshNormal();
meshArray.push(torusMeshNormal);
const torusMeshLambert = createTorusMeshLambert();
meshArray.push(torusMeshLambert);
const torusMeshPhong = createTorusMeshPhong();
meshArray.push(torusMeshPhong);
const torusMeshToon = createTrustMeshToon();
meshArray.push(torusMeshToon);
const torusMeshStandard = createTrustMeshStandard();
meshArray.push(torusMeshStandard);
const torusMeshStandardBird = createTrustMeshStandardBird();
meshArray.push(torusMeshStandardBird);

let sceneMesh = torusMeshBasic;
scene.add(sceneMesh);


let mouseX = 0; // マウス座標
// マウス座標はマウスが動いた時のみ取得できる
document.addEventListener("mousemove", (event) => {
	mouseX = event.pageX;
});
let changer = false;
let meshIdx = 0;
canvas.addEventListener('click', ()=>{
	changer = true;
	meshIdx += 1;
})

// 毎フレーム時に実行されるループイベントです
let rot = 0;
let rot_x = 0;
let rot_y = 0;
renderer.setAnimationLoop(tick);
function tick() {
	if( changer ) {
		const mesh = meshArray[meshIdx%(meshArray.length)];
		scene.remove(sceneMesh);
		scene.add(mesh);
		sceneMesh = mesh;
	}
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
	// 回転
	rot_x -= 0.01;
	rot_y -= 0.01;
	sceneMesh.rotation.x = rot_x;
 	sceneMesh.rotation.y = rot_y;
	renderer.render(scene, camera); // レンダリング
}
