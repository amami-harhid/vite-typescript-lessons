import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';

/** 円柱を作成 */ 
export const createCylinder = ():THREE.Mesh => {
    const radiusTop = 5;
    const radiusBottom = 20;
    const height = 10;
    const radialSegments = 32;
    const heightSegments = 1;
    const openEnded = false;
    const geometry: THREE.CylinderGeometry = new Three.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded);
    const material: THREE.MeshStandardMaterial = new Three.MeshStandardMaterial({color: 0xFF0000});
    const _cylinder: THREE.Mesh = new Three.Mesh(geometry, material);
    return _cylinder;
}
