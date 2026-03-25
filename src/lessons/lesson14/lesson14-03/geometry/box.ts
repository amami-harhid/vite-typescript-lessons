import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';

/** 直方体を作成 */ 
export const createBox = ():Three.Mesh => {
    const width = 1;
    const height = 1;
    const depth = 1;
    const geometry: Three.BoxGeometry = new THREE.BoxGeometry(width, height, depth);
    const material: Three.MeshStandardMaterial = new THREE.MeshStandardMaterial({color: 0xff0000});
    const _box: Three.Mesh = new THREE.Mesh(geometry, material);
    return _box;
}
