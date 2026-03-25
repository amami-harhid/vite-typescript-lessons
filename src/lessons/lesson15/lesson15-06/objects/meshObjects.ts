import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';
import { BufferGeometryUtils } from 'three/examples/jsm/Addons';

export const meshMerged = (): Three.Mesh => {

    // 立方体のマテリアルとジオメトリを作成
    const CELL_NUM = 5;
    const geometries:Three.BoxGeometry[] = [];
    for(let i = 0; i < CELL_NUM; i++){
        for(let j = 0; j < CELL_NUM; j++){
            for(let k = 0; k < CELL_NUM; k++){
                const geometry:Three.BoxGeometry = new THREE.BoxGeometry(20, 20, 20);
                const geometryTranslated = geometry.translate(
                    Math.random()*200 * (i - CELL_NUM / 2),
                    Math.random()*200 * (j - CELL_NUM / 2),
                    Math.random()*200 * (k - CELL_NUM / 2),
                );
                geometries.push(geometryTranslated);
            }
        }
    }
    const geometry = BufferGeometryUtils.mergeGeometries(geometries); 
    const material = new THREE.MeshStandardMaterial();
    const mesh:Three.Mesh = new THREE.Mesh(geometry, material);
    return mesh;
}