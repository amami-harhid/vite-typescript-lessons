import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';

/** 環境光源 */
export const ambientLight = () : Three.AmbientLight => {
    const color = 0x00ffff; // 光の色
    const light:Three.AmbientLight = new THREE.AmbientLight(color);
    return light;
}
/** 平行光源 */
export const directionalLight = (): Three.DirectionalLight => {
    const color = 0xff0000; // 光の色
    const intensity = 2; // 光の強さ
    const light:Three.DirectionalLight = new THREE.DirectionalLight(color, intensity);
    return light;
}
