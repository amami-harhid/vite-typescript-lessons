import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';
import Floor from 'assets/floor.png';

export const meshFloor = (): Three.Mesh => {

    const loader:Three.TextureLoader = new THREE.TextureLoader()
    const texture:Three.Texture = loader.load( Floor );
    texture.colorSpace = THREE.SRGBColorSpace; // カラースペースを指定
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping; // リピート可能に
    texture.repeat.set(10, 10); // 10x10マスに設定
    texture.magFilter = THREE.NearestFilter; // アンチエイリアスを外す

    const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(1000, 1000),
        new THREE.MeshStandardMaterial({ 
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