import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';

export const perspectiveCamera = (width:number , height:number): Three.PerspectiveCamera => {
    const fov = 45;
    const aspect = width/height;
    const camera: Three.PerspectiveCamera = new THREE.PerspectiveCamera(fov, aspect);
    camera.position.set(0, 0, 1000);
    return camera;
}
