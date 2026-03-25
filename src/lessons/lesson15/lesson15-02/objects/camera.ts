import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';

export const perspectiveCamera = (width:number , height:number): Three.PerspectiveCamera => {

    const camera: Three.PerspectiveCamera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(40, 40, 40);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    return camera;
}