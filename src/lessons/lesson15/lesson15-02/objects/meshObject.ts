import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';
import checker from 'assets/wood.png';
export const meshObject = (): Three.Mesh => {

    const loader:Three.TextureLoader = new THREE.TextureLoader()
    const texture:Three.Texture = loader.load( checker );
    texture.colorSpace = THREE.SRGBColorSpace; // カラースペースを指定
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    const radius = 10;
    const widthSegments = 130;
    const heightSegments = 130;
    const geometry: Three.SphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);    
    const material:Three.MeshStandardMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1.0 });
    material.map = texture;
    material.metalness = 0.5;
    material.roughness = 1.0;

    const meshKnot = new THREE.Mesh(
        geometry, material
    );
    //meshKnot.position.set(0, 0, 0);
    return meshKnot;
}