import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';

/** 平面を作成 */ 
export const createPlane = ():THREE.Mesh => {
    const width = 5;
    const height = 20;
    const widthSegments = 1;
    const heightSegments = 1;
    const geometry: THREE.PlaneGeometry = new Three.PlaneGeometry(width, height, widthSegments, heightSegments);
    const material: THREE.MeshStandardMaterial = new Three.MeshStandardMaterial({color: 0xFF0000, side: Three.DoubleSide});
    const _plane: THREE.Mesh = new Three.Mesh(geometry, material);
    return _plane;
}
