import * as Three from '@nm/three/build/three.webgpu';
import type * as THREE from '@nm/@types/three/src/Three.WebGPU';

export const fog = (): THREE.Fog => {
    const color = 0x000000;
    const near = 50;
    const far = 2000;
    const fog: THREE.Fog = new Three.Fog(color, near, far);
    return fog;
}