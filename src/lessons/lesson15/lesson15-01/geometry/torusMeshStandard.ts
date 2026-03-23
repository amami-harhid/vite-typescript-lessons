import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';

/** トーラスを作成(MeshStandard) */ 
export const createTrustMeshStandard = ():THREE.Mesh => {
    const radius = 200;
    const tube = 50;
    const height = 32;
    const radialSegments = 100;
    const geometry: THREE.TorusGeometry = new Three.TorusGeometry(radius, tube, height, radialSegments);
    // MeshStandardMaterial
    const material: THREE.MeshStandardMaterial = new Three.MeshStandardMaterial(
        {
            color: 0x6699FF,
            roughness:0.5
        }
    );
    const _torus: THREE.Mesh = new Three.Mesh(geometry, material);
    return _torus;
}
