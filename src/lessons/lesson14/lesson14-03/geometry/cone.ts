import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';

/** 円錐を作成 */ 
export const createCone = ():Three.Mesh => {
    const radius = 5;
    const height = 20;
    const radialSegments = 32;
    const heightSegments = 1;
    const openEnded = false;
    const geometry: Three.ConeGeometry = new THREE.ConeGeometry(radius, height, radialSegments, heightSegments, openEnded);
    const material: Three.MeshStandardMaterial = new THREE.MeshStandardMaterial({color: 0xFF0000});
    const _cone: Three.Mesh = new THREE.Mesh(geometry, material);
    return _cone;
}
