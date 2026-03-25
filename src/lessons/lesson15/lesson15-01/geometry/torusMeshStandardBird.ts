import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';
import Bird from 'assets/bird.png';

/** トーラスを作成(MeshStandard) */ 
export const createTrustMeshStandardBird = ():Three.Mesh => {
    const radius = 200;
    const tube = 50;
    const height = 32;
    const radialSegments = 100;
    const geometry: Three.TorusGeometry = new THREE.TorusGeometry(radius, tube, height, radialSegments);
    const loader:Three.TextureLoader = new THREE.TextureLoader()
    const texture:Three.Texture = loader.load( Bird );
    texture.colorSpace = THREE.SRGBColorSpace; // カラースペースを指定
    // MeshStandardMaterial
    const material: Three.MeshStandardMaterial = new THREE.MeshStandardMaterial(
        {
            map: texture,
            color: 0x6699FF,
            roughness:0.5
        }
    );
    const _torus: Three.Mesh = new THREE.Mesh(geometry, material);
    return _torus;
}
