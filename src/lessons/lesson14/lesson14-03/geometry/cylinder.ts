import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';

/** 円柱を作成 */ 
export const createCylinder = ():Three.Mesh => {
    const radiusTop = 5;
    const radiusBottom = 20;
    const height = 10;
    const radialSegments = 32;
    const heightSegments = 1;
    const openEnded = false;
    const geometry: Three.CylinderGeometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded);
    const material: Three.MeshStandardMaterial = new THREE.MeshStandardMaterial({color: 0xFF0000});
    const _cylinder: Three.Mesh = new THREE.Mesh(geometry, material);
    return _cylinder;
}
