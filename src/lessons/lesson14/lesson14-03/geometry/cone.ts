import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';

/** 円錐を作成 */ 
export const createCone = ():THREE.Mesh => {
    const radius = 5;
    const height = 20;
    const radialSegments = 32;
    const heightSegments = 1;
    const openEnded = false;
    const geometry: THREE.ConeGeometry = new Three.ConeGeometry(radius, height, radialSegments, heightSegments, openEnded);
    const material: THREE.MeshStandardMaterial = new Three.MeshStandardMaterial({color: 0xFF0000});
    const _cone: THREE.Mesh = new Three.Mesh(geometry, material);
    return _cone;
}
