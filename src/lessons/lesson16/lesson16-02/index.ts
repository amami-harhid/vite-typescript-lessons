/**
 * 【15-07】Three.js(WEBGPU) / GSAP編
 */
import { DemoIconsWorld } from './demo';
import { loadFont } from '~/loadFonts';
window.addEventListener("DOMContentLoaded", async() => {
	await loadFont();
	new DemoIconsWorld();
});