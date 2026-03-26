import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';

export const fog = (): Three.Fog => {
    const color = 0x000000;
    const near = 50;
    const far = 2000;
    const fog: Three.Fog = new THREE.Fog(color, near, far);
    return fog;
}