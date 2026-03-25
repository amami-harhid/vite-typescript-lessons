export const createCanvas = () => {
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

export const getGL = (canvas: HTMLCanvasElement):WebGLRenderingContext => {
	const gl = canvas.getContext("webgl");
	if(gl == null){
		throw new Error('gl is null');
	}
	return gl;
}