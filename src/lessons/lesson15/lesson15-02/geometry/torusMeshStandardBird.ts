import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';
import Bird from 'assets/bird.png';

/** トーラスを作成(MeshStandard) */ 
export const createTrustMeshStandardBird = ():THREE.Mesh => {
    const radius = 200;
    const tube = 50;
    const height = 32;
    const radialSegments = 100;
    const geometry: THREE.TorusGeometry = new Three.TorusGeometry(radius, tube, height, radialSegments);
    const loader:THREE.TextureLoader = new Three.TextureLoader()
    const texture:THREE.Texture = loader.load( Bird );
    texture.colorSpace = Three.SRGBColorSpace; // カラースペースを指定
    // MeshStandardMaterial
    const material: THREE.MeshStandardMaterial = new Three.MeshStandardMaterial(
        {
            map: texture,
            color: 0x6699FF,
            roughness:0.5
        }
    );
    const _torus: THREE.Mesh = new Three.Mesh(geometry, material);
    return _torus;
}
