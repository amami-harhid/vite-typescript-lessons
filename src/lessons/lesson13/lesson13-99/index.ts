/**
 * 【13-01】WebGL / Shader
 *  ShaderのコードをGPUで動作させる例
 *  とっても面倒なコードになる！と理解させるための例
 */
import * as cvs from "./canvas";
import * as shd from "./shader";

const canvas = cvs.createCanvas();
const gl = cvs.getGL(canvas);
const [timeUniformLocation, startTime] = shd.createShader(gl);
console.log(timeUniformLocation);
const frameLoop = function * (gl : WebGLRenderingContext){
	for(;;) {
		// 描画をクリアする
		gl.clear(gl.COLOR_BUFFER_BIT);
		// 
		const x = ((window.performance || Date).now() - startTime) / 1000;
		gl.uniform1f(timeUniformLocation, x);
		// 描画する
		gl.drawElements(gl.TRIANGLES, shd.NUM.INDICES * shd.NUM.PARTICLES, gl.UNSIGNED_SHORT, 0);
		yield;
	}
}

const loop = frameLoop(gl);

setInterval(()=>{
	loop.next();
}, 1000/60);

