import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';

/** トーラスを作成 */ 
export const createTorus = ():THREE.Mesh => {
    const radius = 100;
    const tube = 10;
    const height = 16;
    const radialSegments = 100;
    const heightSegments = 100;
    const arc = Math.PI * 2;
    const geometry: THREE.TorusGeometry = new Three.TorusGeometry(radius, tube, height, radialSegments, heightSegments, arc);
    const material: THREE.MeshStandardMaterial = new Three.MeshStandardMaterial({color: 0xFF0000});
    const _torus: THREE.Mesh = new Three.Mesh(geometry, material);
    return _torus;
}
