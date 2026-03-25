import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';

/** 環境光源 */
export const ambientLight = () : Three.AmbientLight => {
    const color = 0xFFFFFF; // 光の色
    const intensity = 5; // 光の強さ
    const light:Three.AmbientLight = new THREE.AmbientLight(color, intensity);
    // ライトに影を有効にする
    light.castShadow = true;
    return light;
}
/** 平行光源 */
export const directionalLight = (): Three.DirectionalLight => {
    const color = 0xFFFFFF; // 光の色
    const intensity = 30; // 光の強さ
    const light:Three.DirectionalLight = new THREE.DirectionalLight(color, intensity);
    // ライトに影を有効にする
    light.castShadow = true;
    return light;
}
/** 半球光源 */
export const hemisphereLight = () :Three.HemisphereLight => {
    const skyColor = 0x909090;
    const groundColor = 0x0000ff;
    const intensity = 30.0;
    const light:Three.HemisphereLight = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    // ライトに影を有効にする
    light.castShadow = true;
    return light;
}
/** 点光源 */
export const pointLight = () :Three.PointLight => {
    const color = 0x00FF00; // 光の色
    const intensity = 130; // 光の強さ
    const distance = 150; // 距離
    const decay = 0.5; // 光の減衰率
    const light: Three.PointLight = new THREE.PointLight(color, intensity, distance, decay);
    // ライトに影を有効にする
    light.castShadow = true;
    return light;
}
/** スポットライト光源 */
export const spotLight = () : Three.SpotLight => {
    const color = 0xff00ff;
    const intensity = 50; // 光の強さ
    const distance = 100; // 距離
    const angle = Math.PI / 4; // 照射角
    const penumbra = 0; // ボケ具合
    const decay = 0; // 光の減衰率
    const light: Three.SpotLight = new THREE.SpotLight(color, intensity, distance, angle, penumbra, decay);
    // ライトに影を有効にする
    light.castShadow = true;
    return light;
}
/** 矩形光源 */
import { RectAreaLightTexturesLib } from 'three/examples/jsm/lights/RectAreaLightTexturesLib';
export const rectAreaLight = (): Three.RectAreaLight => {
    // LTC（Linearly Transformed Cosines）の初期化
    const ltc = RectAreaLightTexturesLib.init();
    THREE.RectAreaLightNode.setLTC(ltc);
    

    const color = 0xf0f0f0;
    const intensity = 30; // 光の強さ
    const width = 50; // 幅
    const height = 50; // 高さ
    const light: Three.RectAreaLight = new THREE.RectAreaLight(color, intensity, width, height);
    // ライトに影を有効にする
    light.castShadow = true;
    return light;
}