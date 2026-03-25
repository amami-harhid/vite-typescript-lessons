import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';
import checker from 'assets/wood.png';
export const meshObject = (): Three.Mesh => {

    const loader:Three.TextureLoader = new THREE.TextureLoader()
    const texture:Three.Texture = loader.load( checker );
    texture.colorSpace = THREE.SRGBColorSpace; // カラースペースを指定
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    const radius = 15;
    const widthSegments = 130;
    const heightSegments = 130;
    const geometry: Three.SphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);    
    const material:Three.MeshStandardMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1.0 });
    material.map = texture;
    material.metalness = 0.5;
    material.roughness = 1.0;

    const object = new THREE.Mesh(
        geometry, material
    );
    object.position.set(0, 0, 0);
    // 影を落とす
    object.castShadow = true;
    return object;
}