import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';

/** トーラスを作成(MeshStandard) */ 
export const createTrustMeshStandard = ():Three.Mesh => {
    const radius = 200;
    const tube = 50;
    const height = 32;
    const radialSegments = 100;
    const geometry: Three.TorusGeometry = new THREE.TorusGeometry(radius, tube, height, radialSegments);
    // MeshStandardMaterial
    const material: Three.MeshStandardMaterial = new THREE.MeshStandardMaterial(
        {
            color: 0x6699FF,
            roughness:0.5
        }
    );
    const _torus: Three.Mesh = new THREE.Mesh(geometry, material);
    return _torus;
}
