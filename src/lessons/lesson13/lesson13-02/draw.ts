/**
 * シーンをレンダリングする
 */
import { mat4 } from 'gl-matrix';
import type { Buffers } from './init_buffer';
export type ProgramInfo = {
    program: WebGLProgram,
    attribLocations: {vertexPosition: number},
    uniformLocations: {
        projectionMatrix: WebGLUniformLocation | null,
        modelViewMatrix: WebGLUniformLocation | null
    }
}

export const drawScene = (gl: WebGLRenderingContext, programInfo: ProgramInfo, buffers: Buffers) => {
    gl.clearColor(0.0, 0.0, 0.0, 1.0); // 黒でクリア、完全に不透明
    gl.clearDepth(1.0); // 全てをクリア
    gl.enable(gl.DEPTH_TEST); // 深度テストを有効化
    gl.depthFunc(gl.LEQUAL); // 奥にあるものは隠れるようにする

    // 描写を行う前にキャンバスをクリアする
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const canvas = gl.canvas as HTMLCanvasElement;
    // 視点マトリクスを作成する( カメラで遠近感を再現するために使用される特殊な行列 )
    // 視野角は 45 度
    // 幅と高さの比率はキャンバスの表示サイズに合わせる
    // カメラから 0.1 単位から 100 単位までのオブジェクトのみを描画する
    const fieldOfView = (45 * Math.PI) / 180; // 45度をラジアンにする
    const aspect = canvas.clientWidth / canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = mat4.create();
    mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);
     // 描写位置をシーンの中央である "identity" ポイントにセットする
    const modelViewMatrix = mat4.create();
    // 描写位置を描写し始めたい位置に少しだけ動かす
    mat4.translate(
        modelViewMatrix, // 変換結果の格納先
        modelViewMatrix, // 変換する行列
        [-0.0, 0.0, -6.0],
    ); // 変換量
    // WebGL にどのように座標バッファーから座標をvertexPosition 属性に引き出すか伝える    
    setPositionAttribute(gl, programInfo, buffers );
    // WebGL に、描画にこのプログラムを使用するよう伝える
    gl.useProgram(programInfo.program);
    // シェーダーユニフォームを設定
    gl.uniformMatrix4fv(
        programInfo.uniformLocations.projectionMatrix,
        false,
        projectionMatrix,
    );
    gl.uniformMatrix4fv(
        programInfo.uniformLocations.modelViewMatrix,
        false,
        modelViewMatrix,
    );
    // 配列を描画する
    const offset = 0;
    const vertexCount = 4; // 頂点４
    gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
}
/**
 * WebGL に、位置バッファーから位置をvertexPosition 属性に引き出す方法を指示する
 * @param gl 
 * @param programInfo 
 * @param buffers 
 */
const setPositionAttribute = (gl: WebGLRenderingContext, programInfo: ProgramInfo, buffers:Buffers) => {
    const numComponents = 2; // 反復処理ごとに 2 つの値を取り出す
    const type = gl.FLOAT; // バッファ内のデータは 32 ビット浮動小数点数
    const normalize = false; // 正規化なし
    const stride = 0; // 一組の値から次の値まで何バイトで移動するか
    // 0 = 上記の type と numComponents を使用
    const offset = 0; // バッファー内の何バイト目から開始するか
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        numComponents,
        type,
        normalize,
        stride,
        offset,
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
}