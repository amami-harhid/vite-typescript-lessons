/**
 * シェーダープログラムを初期化し、WebGLに
 * データの描画方法を教える
 */
import { vsSource } from "./vs";
import { fsSource } from "./fs";
export const initShaderProgram = (gl: WebGLRenderingContext) => {
    // 頂点シェーダー作成
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    // フラグメントシェーダー作成
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
    // シェーダープログラムの作成
    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram); // リンクさせる
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        const msg = gl.getProgramInfoLog(shaderProgram);
        throw new Error(msg||'シェーダープログラムを初期化できません');
    }
    return shaderProgram;
}

const loadShader = (gl: WebGLRenderingContext, type: number, source: string) => {
    const shader = gl.createShader(type);
    if(shader == null) {
        throw new Error('createdShader error');
    }
    // シェーダーオブジェクトにソースを送信
    gl.shaderSource(shader, source);
    // シェーダープログラムをコンパイル
    gl.compileShader(shader);
    // コンパイルが成功したか確認する
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
         gl.deleteShader(shader);
        throw new Error('Shader Compile failed');
    }
    return shader;
}