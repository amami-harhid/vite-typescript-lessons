import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';

/** トーラスを作成(MeshPhong) */ 
export const createTorusMeshPhong = ():THREE.Mesh => {
    const radius = 200;
    const tube = 50;
    const height = 32;
    const radialSegments = 100;
    const geometry: THREE.TorusGeometry = new Three.TorusGeometry(radius, tube, height, radialSegments);
    // MeshPhongMaterial
    const material: THREE.MeshPhongMaterial = new Three.MeshPhongMaterial({color: 0x6699FF});
    const _torus: THREE.Mesh = new Three.Mesh(geometry, material);
    return _torus;
}
