import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';

export const perspectiveCamera = (width:number , height:number): THREE.PerspectiveCamera => {
    const fov = 45;
    const aspect = width/height;
    const camera: THREE.PerspectiveCamera = new Three.PerspectiveCamera(fov, aspect);
    camera.position.set(0, 0, 1000);
    return camera;
}
