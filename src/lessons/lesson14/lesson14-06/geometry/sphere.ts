import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three2 from '@nm/@types/three/src/Three.WebGPU';

import EarthMap from 'assets/earthmap1k.jpg';

/** 球体を作成 */ 
export const createShpere = ():Three2.Mesh => {
    const radius = 300;
    const widthSegments = 30;
    const heightSegments = 30;
    const geometry: Three2.SphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
    const loader:Three2.TextureLoader = new THREE.TextureLoader()
    const texture:Three2.Texture = loader.load( EarthMap );
    texture.colorSpace = THREE.SRGBColorSpace; // カラースペースを指定

    const material: Three2.MeshStandardMaterial = new THREE.MeshStandardMaterial(
        {
            map: texture,
            color: 0xffffff,
            side: THREE.DoubleSide,
        }
    );

    const _shpere: Three2.Mesh = new THREE.Mesh(geometry, material);
    return _shpere;
}
