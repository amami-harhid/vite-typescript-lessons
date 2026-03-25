import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';

/** 環境光源 */
export const ambientLight = () : THREE.AmbientLight => {
    const color = 0x00ffff; // 光の色
    const light:THREE.AmbientLight = new Three.AmbientLight(color);
    return light;
}
/** 平行光源 */
export const directionalLight = (): THREE.DirectionalLight => {
    const color = 0xff0000; // 光の色
    const intensity = 2; // 光の強さ
    const light:THREE.DirectionalLight = new Three.DirectionalLight(color, intensity);
    return light;
}
