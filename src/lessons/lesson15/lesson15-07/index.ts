/**
 * 【15-07】Three.js(WEBGPU) / 基本編
 *  3D モデル ( GLTF ) --- ToyCar
 *  https://ics.media/tutorial-three/model_basic/
 */
import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';
import { OrbitControls } from 'three/examples/jsm/Addons';
import { GLTFLoader } from 'three/examples/jsm/Addons';
import { meshFloor } from './objects/meshFloor';
import * as CANVAS from './canvas';

// gltf のimport 記述は エラーになる( Unexpected token ':' )
//import Troll from 'assets/3d_models/troll/gltf-binary/Troll.glb';

// GLTFLoaderでパスを与えてロードすること！
//const ToyCarGltf = '/assets/3d_models/toyCar/gltf/ToyCar.gltf';

// *.gltf, *.glb のどちらでもロードできる！
const Troll = '/assets/3d_models/troll/gltf-binary/Troll.glb';

// GLTF形式のモデルデータを読み込む
const loader = new GLTFLoader();

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
renderer.shadowMap.enabled = true;

// シーンを作成
const scene: Three.Scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// カメラを作成
const camera: Three.PerspectiveCamera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
camera.position.set(1, 1, 1);

// カメラコントローラーを作成
const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 0, 0);
controls.update();

// 平行光源
// 上から照らす
const directionalLight:Three.DirectionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(10, 20, 10);
directionalLight.intensity = 1;
// 横(右)から照らす
const directionalLight2:Three.DirectionalLight = new THREE.DirectionalLight(0x0000ff); // 青色
directionalLight2.intensity = 2;
directionalLight2.position.set(10, 20, 10);
// 横(左)から照らす
const directionalLight3:Three.DirectionalLight = new THREE.DirectionalLight(0xff0000); // 赤色
directionalLight3.intensity = 1;
directionalLight3.position.set(-10, 20, 10);
// 後ろから照らす
const directionalLight4:Three.DirectionalLight = new THREE.DirectionalLight(0x00ff00); // 緑色
directionalLight4.intensity = 1;
directionalLight4.position.set(10, 20, -10);

directionalLight.castShadow = true; // 影を落とす設定
directionalLight.shadow.mapSize.width = 2048;
directionalLight.shadow.mapSize.height = 2048;
directionalLight2.castShadow = true; // 影を落とす設定
directionalLight2.shadow.mapSize.width = 2048;
directionalLight2.shadow.mapSize.height = 2048;
directionalLight3.castShadow = true; // 影を落とす設定
directionalLight3.shadow.mapSize.width = 2048;
directionalLight3.shadow.mapSize.height = 2048;
directionalLight4.castShadow = true; // 影を落とす設定
directionalLight4.shadow.mapSize.width = 2048;
directionalLight4.shadow.mapSize.height = 2048;

scene.add(directionalLight);
scene.add(directionalLight2);
scene.add(directionalLight3);
scene.add(directionalLight4);

// GLTFファイルのパスを指定
const gltf = await loader.loadAsync(Troll);
// 読み込み後に3D空間に追加
const model = gltf.scene;
scene.add(model);

model.traverse((child:Three.Object3D<Three.Object3DEventMap>)=>{
	child.castShadow = true;
})

const floor = meshFloor();
scene.add(floor);

// 毎フレーム時に実行されるループイベントです
renderer.setAnimationLoop(tick);
function tick() {
	renderer.render(scene, camera); // レンダリング
}
