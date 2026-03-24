import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';

export const meshObjects = (): THREE.Mesh[] => {

    // 立方体のマテリアルとジオメトリを作成
    const material = new Three.MeshStandardMaterial({
        color: 0x2299ff,
        roughness: 0.1,
        metalness: 0.2,
    });
    const geometry = new Three.BoxGeometry(45, 45, 45);
    const boxes : THREE.Mesh[] = []
    for (let i = 0; i < 60; i++) {
        const box = new Three.Mesh(geometry, material);
        box.position.x = Math.round((Math.random() - 0.5) * 19) * 50 + 25;
        box.position.y = 25;
        box.position.z = Math.round((Math.random() - 0.5) * 19) * 50 + 25;
        // 影の設定
        box.receiveShadow = true;
        box.castShadow = true;
        boxes.push(box);
    }
    return boxes;
}