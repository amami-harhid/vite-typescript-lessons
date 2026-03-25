import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';

/** トーラスを作成(MeshPhong) */ 
export const createTorusMeshPhong = ():Three.Mesh => {
    const radius = 200;
    const tube = 50;
    const height = 32;
    const radialSegments = 100;
    const geometry: Three.TorusGeometry = new THREE.TorusGeometry(radius, tube, height, radialSegments);
    // MeshPhongMaterial
    const material: Three.MeshPhongMaterial = new THREE.MeshPhongMaterial({color: 0x6699FF});
    const _torus: Three.Mesh = new THREE.Mesh(geometry, material);
    return _torus;
}
