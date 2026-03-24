import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';

/** 環境光源 */
export const ambientLight = () : THREE.AmbientLight => {
    const color = 0xFFFFFF; // 光の色
    const intensity = 5; // 光の強さ
    const light:THREE.AmbientLight = new Three.AmbientLight(color, intensity);
    return light;
}
/** 平行光源 */
export const directionalLight = (): THREE.DirectionalLight => {
    const color = 0xFFFFFF; // 光の色
    const intensity = 30; // 光の強さ
    const light:THREE.DirectionalLight = new Three.DirectionalLight(color, intensity);
    return light;
}
/** 半球光源 */
export const hemisphereLight = () :THREE.HemisphereLight => {
    const skyColor = 0x909090;
    const groundColor = 0x0000ff;
    const intensity = 30.0;
    const light:THREE.HemisphereLight = new Three.HemisphereLight(skyColor, groundColor, intensity);
    return light;
}
/** 点光源 */
export const pointLight = () :THREE.PointLight => {
    const color = 0xFFFFFF; // 光の色
    const intensity = 30; // 光の強さ
    const distance = 50; // 距離
    const decay = 1; // 光の減衰率
    const light: THREE.PointLight = new Three.PointLight(color, intensity, distance, decay);
    return light;
}
/** スポットライト光源 */
export const spotLight = () : THREE.SpotLight => {
    const color = 0xffffff;
    const intensity = 30; // 光の強さ
    const distance = 50; // 距離
    const angle = Math.PI / 4; // 照射角
    const penumbra = 0; // ボケ具合
    const decay = 0.5; // 光の減衰率
    const light: THREE.SpotLight = new Three.SpotLight(color, intensity, distance, angle, penumbra, decay);
    return light;
}
/** 矩形光源 */
import { RectAreaLightTexturesLib } from 'three/examples/jsm/lights/RectAreaLightTexturesLib';
export const rectAreaLight = (): THREE.RectAreaLight => {
    // LTC（Linearly Transformed Cosines）の初期化
    const ltc = RectAreaLightTexturesLib.init();
    Three.RectAreaLightNode.setLTC(ltc);
    

    const color = 0xffffff;
    const intensity = 30; // 光の強さ
    const width = 20; // 幅
    const height = 20; // 高さ
    const light: THREE.RectAreaLight = new Three.RectAreaLight(color, intensity, width, height);
    return light;
}