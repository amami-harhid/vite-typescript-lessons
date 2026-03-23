import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';

import EarthMap from 'assets/earthmap1k.jpg';

/** 球体を作成 */ 
export const createShpere = ():THREE.Mesh => {
    const radius = 300;
    const widthSegments = 30;
    const heightSegments = 30;
    const geometry: THREE.SphereGeometry = new Three.SphereGeometry(radius, widthSegments, heightSegments);
    const loader:THREE.TextureLoader = new Three.TextureLoader()
    const texture:THREE.Texture = loader.load( EarthMap );
    texture.colorSpace = Three.SRGBColorSpace; // カラースペースを指定

    const material: THREE.MeshStandardMaterial = new Three.MeshStandardMaterial(
        {
            map: texture,
            color: 0xffffff,
            side: Three.DoubleSide,
        }
    );

    const _shpere: THREE.Mesh = new Three.Mesh(geometry, material);
    return _shpere;
}
