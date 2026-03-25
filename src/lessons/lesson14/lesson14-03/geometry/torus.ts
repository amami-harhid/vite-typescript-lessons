import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';

/** トーラスを作成 */ 
export const createTorus = ():Three.Mesh => {
    const radius = 100;
    const tube = 10;
    const height = 16;
    const radialSegments = 100;
    const heightSegments = 100;
    const arc = Math.PI * 2;
    const geometry: Three.TorusGeometry = new THREE.TorusGeometry(radius, tube, height, radialSegments, heightSegments, arc);
    const material: Three.MeshStandardMaterial = new THREE.MeshStandardMaterial({color: 0xFF0000});
    const _torus: Three.Mesh = new THREE.Mesh(geometry, material);
    return _torus;
}
