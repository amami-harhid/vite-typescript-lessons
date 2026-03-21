/**
 * 【13-01】WebGL / Shader
 *  ShaderのコードをGPUで動作させる例
 *  とっても面倒なコードになる！と理解させるための例
 */
import { createShader, NUM } from "./shader";

const createCanvas = () => {
	const main = document.querySelector('#main');
	const canvas = document.createElement('canvas');
	canvas.id = 'spinning-canvas';
	canvas.style.backgroundColor = '#0078D4';
	canvas.style.position = 'fixed';
	canvas.style.top = '0';
	canvas.style.left = '0';
	canvas.style.width = '100%';
	canvas.style.height = '100%';
	canvas.style.zIndex = '100';
	main?.appendChild(canvas);
	return canvas;
}
const getGL = (canvas: HTMLCanvasElement):WebGLRenderingContext => {
	const gl = canvas.getContext("webgl");
	if(gl == null){
		throw new Error('gl is null');
	}
	return gl;
}
const canvas = createCanvas();
const gl = getGL(canvas);
const [timeUniformLocation, startTime] = createShader(gl);


const frame = () => {
	gl.uniform1f(timeUniformLocation, ((window.performance || Date).now() - startTime) / 1000);

	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.drawElements(gl.TRIANGLES, NUM.INDICES * NUM.PARTICLES, gl.UNSIGNED_SHORT, 0);
	requestAnimationFrame(frame);
}

frame();

