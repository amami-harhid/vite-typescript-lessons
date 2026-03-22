export type Buffers = {
    position: WebGLBuffer
}
/**
 * 正方形の各頂点の座標を含むバッファーを作成し、そこに頂点の座標を書き込む
 * @param gl 
 */
export const initBuffers = (gl: WebGLRenderingContext) : Buffers=> {

    const positionBuffer = initPositionBuffer(gl);

    return {
        position: positionBuffer,
    };
}

const initPositionBuffer = (gl: WebGLRenderingContext) => {
    // 正方形の位置を保存するためのバッファーを作成する
    const positionBuffer = gl.createBuffer();
    // positionBuffer をバッファー操作の適用対象として宣言する
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    
    // 正方形の頂点座標の配列を作成する
    const positions = [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0];

    // 形を作るために頂点座標のリストを WebGL に渡す。
    // ※ JavaScript の配列(positions) --> Float32Array に変換している
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    return positionBuffer;
}