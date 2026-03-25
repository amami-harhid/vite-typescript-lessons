import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';

/** 平面を作成 */ 
export const createPlane = ():Three.Mesh => {
    const width = 5;
    const height = 20;
    const widthSegments = 1;
    const heightSegments = 1;
    const geometry: Three.PlaneGeometry = new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);
    const material: Three.MeshStandardMaterial = new THREE.MeshStandardMaterial({color: 0xFF0000, side: THREE.DoubleSide});
    const _plane: Three.Mesh = new THREE.Mesh(geometry, material);
    return _plane;
}
