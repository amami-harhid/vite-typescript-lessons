/**
 * 【15-06】Three.js(WEBGPU) / 基本編
 *  BufferGeometryUtils.mergeGeometries
 *  https://ics.media/tutorial-three/geometry_merge/
 */
import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';
import * as CANVAS from './canvas';
import { meshMerged } from './objects/meshObjects';
import { directionalLight, ambientLight } from './objects/light';
import { perspectiveCamera } from './objects/camera';
import { fog } from './objects/fog';

// レンダーサイズを指定
const width = 960;
const height = 540;

const canvas = CANVAS.createCanvas();

// レンダラーを作成
const renderer: Three.WebGPURenderer = new THREE.WebGPURenderer({
	canvas: canvas,
	antialias: true,
	devicePixelRatio: devicePixelRatio,
});
renderer.setSize(width, height);

// シーンを作成
const scene: Three.Scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

scene.fog = fog();


// カメラを作成
const camera = perspectiveCamera(width, height);

// 物体を作成
const objects:Three.Mesh = meshMerged();
scene.add(objects);

// ライトを作成
scene.add(directionalLight());
scene.add(ambientLight());

// 毎フレーム時に実行されるループイベントです
renderer.setAnimationLoop(tick);
function tick() {
	objects.translateX( (Math.random()) * 0.01 );
	objects.rotateX( (Math.random()) * 0.01 );
	objects.rotateY( (Math.random()-0.5) * 0.05 );
	renderer.render(scene, camera); // レンダリング
}
