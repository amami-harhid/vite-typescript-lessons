import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';

/** 星屑を作成します */
export const createStarField = () => {
    // 頂点情報を作詞絵
    const vertices = [];
    for (let i = 0; i < 1000; i++) {
        const x = 3000 * (Math.random() - 0.5);
        const y = 3000 * (Math.random() - 0.5);
        const z = 3000 * (Math.random() - 0.5);

        vertices.push(x, y, z);
    }


    // 形状データを作成
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

    // マテリアルを作成
    const material:Three.PointsMaterial = new THREE.PointsMaterial({
        size: 10,
        color: 0xffffff,
    });

    // 物体を作成
    const mesh:Three.Points = new THREE.Points(geometry, material);

    return mesh;
}