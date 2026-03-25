import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';


/** スポットライト光源 */
export const spotLight = () : Three.SpotLight => {
    const color = 0xffffff;
    const intensity = 200; // 光の強さ
    const distance = 2000; // 距離
    const angle = Math.PI / 5; // 照射角
    const penumbra = 0.2; // ボケ具合
    const decay = 0.5; // 光の減衰率
    const light: Three.SpotLight = new THREE.SpotLight(color, intensity, distance, angle, penumbra, decay);
    light.position.set(500, 250, 500);
    light.castShadow = true; // 影を落とす設定
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    return light;
}
