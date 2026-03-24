import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';
import checker from 'assets/wood.png';
export const meshObject = (): THREE.Mesh => {

    const loader:THREE.TextureLoader = new Three.TextureLoader()
    const texture:THREE.Texture = loader.load( checker );
    texture.colorSpace = Three.SRGBColorSpace; // カラースペースを指定
    texture.wrapS = Three.RepeatWrapping;
    texture.wrapT = Three.RepeatWrapping;
    const radius = 10;
    const widthSegments = 130;
    const heightSegments = 130;
    const geometry: THREE.SphereGeometry = new Three.SphereGeometry(radius, widthSegments, heightSegments);    
    const material:THREE.MeshStandardMaterial = new Three.MeshStandardMaterial({ color: 0xffffff, roughness: 1.0 });
    material.map = texture;
    material.metalness = 0.5;
    material.roughness = 1.0;

    const meshKnot = new Three.Mesh(
        geometry, material
    );
    //meshKnot.position.set(0, 0, 0);
    return meshKnot;
}