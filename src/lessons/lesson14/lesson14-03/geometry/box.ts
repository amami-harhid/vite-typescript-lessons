import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';

/** 直方体を作成 */ 
export const createBox = ():THREE.Mesh => {
    const width = 1;
    const height = 1;
    const depth = 1;
    const geometry: THREE.BoxGeometry = new Three.BoxGeometry(width, height, depth);
    const material: THREE.MeshStandardMaterial = new Three.MeshStandardMaterial({color: 0xff0000});
    const _box: THREE.Mesh = new Three.Mesh(geometry, material);
    return _box;
}
