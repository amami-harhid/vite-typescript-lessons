import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';

export const perspectiveCamera = (width:number , height:number): THREE.PerspectiveCamera => {
    const fov = 30;
    const aspect = width/height;
    const near = 1;
    const far = 9999;
    const camera: THREE.PerspectiveCamera = new Three.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(100, 80, 100);
    camera.lookAt(new Three.Vector3(0, 0, 0));
    return camera;
}

export const orthographicCamera = (width:number, height:number): THREE.OrthographicCamera => {

    const left = -(width/2);
    const right = width/2;
    const top = height/2;
    const bottom = -(height/2);
    const camera: THREE.OrthographicCamera = new Three.OrthographicCamera(left, right, top, bottom);
    camera.position.set(100, 80, 100);
    camera.lookAt(new Three.Vector3(0, 0, 0));
    return camera;
}
