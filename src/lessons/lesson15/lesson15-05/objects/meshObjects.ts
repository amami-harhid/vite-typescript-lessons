import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';

export const meshObjects = (): THREE.Mesh[] => {

    // 立方体のマテリアルとジオメトリを作成
    const geometry = new Three.BoxGeometry(50, 50, 50);
    const material = new Three.MeshStandardMaterial();
    const boxes : THREE.Mesh[] = []
    for (let i = 0; i < 500; i++) {
        const mesh = new Three.Mesh(geometry, material);
        mesh.position.x = (Math.random() - 0.5) * 2000;
        mesh.position.y = (Math.random() - 0.5) * 2000;
        mesh.position.z = (Math.random() - 0.5) * 2000;
        mesh.rotation.x = Math.random() * 2 * Math.PI;
        mesh.rotation.y = Math.random() * 2 * Math.PI;
        mesh.rotation.z = Math.random() * 2 * Math.PI;
        boxes.push(mesh);
    }
    return boxes;
}