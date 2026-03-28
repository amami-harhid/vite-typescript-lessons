import * as THREE from '@nm/three/build/three.webgpu';
import type * as Three from '@nm/@types/three/src/Three.WebGPU';

const scene: Three.Scene = new THREE.Scene();
const renderer: Three.WebGPURenderer = new THREE.WebGPURenderer();
const light: Three.AmbientLight = new THREE.AmbientLight();
const camera: Three.PerspectiveCamera = new THREE.PerspectiveCamera();

const RenderWidth = 600;
const RenderHeight = 400;

export const Main = {
    scene: scene,
    renderer: renderer,
    light: light,
    camera: camera,
    RenderWidth: RenderWidth,
    RenderHeight: RenderHeight,
}