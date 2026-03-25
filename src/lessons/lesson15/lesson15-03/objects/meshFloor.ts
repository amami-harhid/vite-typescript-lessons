import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';
import CheckerdPattern from 'assets/checerd.png';

export const meshFloor = (): Three.Mesh => {

    const loader:Three.TextureLoader = new THREE.TextureLoader()
    const texture:Three.Texture = loader.load( CheckerdPattern );
    texture.colorSpace = THREE.SRGBColorSpace; // カラースペースを指定


    const floor = new THREE.Mesh(
        new THREE.BoxGeometry(4000, 0.1, 4000),
        new THREE.MeshStandardMaterial({ 
            //map: texture,
            color: 0x000000, 
            roughness: 0.2 
        }),
    );
    floor.position.set(0,-20, 0);
    // 影を受け付ける
    floor.receiveShadow = true;
    return floor;
}