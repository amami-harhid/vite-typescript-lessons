import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';

export const perspectiveCamera = (width:number , height:number): THREE.PerspectiveCamera => {

    const camera: THREE.PerspectiveCamera = new Three.PerspectiveCamera(45, width / height);
    camera.position.set(40, 40, 40);
    camera.lookAt(new Three.Vector3(0, 0, 0));
    return camera;
}