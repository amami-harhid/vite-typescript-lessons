import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';

import EarthMap from 'assets/earthmap1k.jpg';

/** 球体を作成 */ 
export const createShpere = ():Three.Mesh => {
    const radius = 300;
    const widthSegments = 30;
    const heightSegments = 30;
    const geometry: Three.SphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
    const loader:Three.TextureLoader = new THREE.TextureLoader()
    const texture:Three.Texture = loader.load( EarthMap );
    texture.colorSpace = THREE.SRGBColorSpace; // カラースペースを指定

    const material: Three.MeshStandardMaterial = new THREE.MeshStandardMaterial(
        {
            map: texture,
            color: 0xffffff,
            side: THREE.DoubleSide,
        }
    );

    const _shpere: Three.Mesh = new THREE.Mesh(geometry, material);
    return _shpere;
}
