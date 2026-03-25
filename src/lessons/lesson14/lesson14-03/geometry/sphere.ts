import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';

/** 球体を作成 */ 
export const createShpere = ():Three.Mesh => {
    const radius = 250;
    const widthSegments = 2;
    const heightSegments = 30;
    const geometry: Three.SphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
    const material: Three.MeshStandardMaterial = new THREE.MeshStandardMaterial({color: 0xffffff});
    const _shpere: Three.Mesh = new THREE.Mesh(geometry, material);
    return _shpere;
}
