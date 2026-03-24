import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';
import Floor from 'assets/floor.png';

export const meshFloor = (): THREE.Mesh => {

    const loader:THREE.TextureLoader = new Three.TextureLoader()
    const texture:THREE.Texture = loader.load( Floor );
    texture.colorSpace = Three.SRGBColorSpace; // カラースペースを指定
    texture.wrapS = texture.wrapT = Three.RepeatWrapping; // リピート可能に
    texture.repeat.set(10, 10); // 10x10マスに設定
    texture.magFilter = Three.NearestFilter; // アンチエイリアスを外す

    const floor = new Three.Mesh(
        new Three.PlaneGeometry(1000, 1000),
        new Three.MeshStandardMaterial({ 
            map: texture,
            roughness: 0.0,
            metalness: 0.0, 
        }),
    );
    floor.rotation.x = -Math.PI/2;
    floor.position.set(0,-20, 0);
    floor.receiveShadow = true; // 影の設定
    return floor;
}