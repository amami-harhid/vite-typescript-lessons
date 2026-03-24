import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';
import CheckerdPattern from 'assets/checerd.png';

export const meshFloor = (): THREE.Mesh => {

    const loader:THREE.TextureLoader = new Three.TextureLoader()
    const texture:THREE.Texture = loader.load( CheckerdPattern );
    texture.colorSpace = Three.SRGBColorSpace; // カラースペースを指定


    const floor = new Three.Mesh(
        new Three.BoxGeometry(4000, 0.1, 4000),
        new Three.MeshStandardMaterial({ 
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