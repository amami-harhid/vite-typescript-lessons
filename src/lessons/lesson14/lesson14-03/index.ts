/**
 * 【14-03】Three.js(WEBGPU) / 入門
 *  形状（ジオメトリ）を指定することで
 *  「球体」や「直方体」、「平面」などさまざまな3Dのオブジェクトを表示する
 *  https://ics.media/tutorial-three/geometry_general/
 */
import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';
import * as CANVAS from './canvas';
import { createShpere } from './geometry/sphere';
//import { createBox } from './geometry/box';
//import { createPlane } from './geometry/plane';
//import { createCone } from './geometry/cone';
//import { createCylinder } from './geometry/cylinder';
import { createTorus } from './geometry/torus';

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
scene.background = new Three.Color(0xe0e0e0);

// カメラを作成
const camera: THREE.PerspectiveCamera = new Three.PerspectiveCamera(45, width / height, 1, 10000);
camera.position.set(0, 0, +1000);

// 球体を作成
const sphere: THREE.Mesh = createShpere();
sphere.position.set( -200, 0, 0);
// シーンに追加
scene.add(sphere);

// トーラス
const torus : THREE.Mesh = createTorus();
torus.position.set( 200, 0, 100);
scene.add(torus);

// 平行光源
const directionalLight: THREE.DirectionalLight = new Three.DirectionalLight(0x00ff00);
directionalLight.position.set(1, 1, 1);
// シーンに追加
scene.add(directionalLight);

 // 毎フレーム時に実行されるループイベントです
 renderer.setAnimationLoop(tick);
 function tick() {
 	sphere.rotation.x -= 0.01;
 	sphere.rotation.y -= 0.01;
 	torus.rotation.x += 0.05;
 	torus.rotation.y += 0.05;
	renderer.render(scene, camera); // レンダリング
}
