/**
 * 【13-02】WebGL / コンテキストへ 2D コンテンツ追加
 *  https://developer.mozilla.org/ja/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context
 */
import * as cvs from "./canvas";
import * as shader from "./shader";
import * as buf from './init_buffer'
import * as draw from './draw';

const canvas = cvs.createCanvas();
const gl = cvs.getGL(canvas);

// クリアカラーを黒に設定し、完全に不透明する
gl.clearColor(0.0, 0.0, 0.0, 1.0);
// 指定されたクリアカラーでカラーバッファーをクリアする
gl.clear(gl.COLOR_BUFFER_BIT);

// シェーダープログラムを初期化する
const shaderProgram = shader.initShaderProgram(gl);

// シェーダープログラムを使用するために必要な情報をすべて収集する。
const programInfo: draw.ProgramInfo = {
    program: shaderProgram, // 初期化したシェーダープログラム
    attribLocations: { // 頂点位置を調べる
        vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
    },
    uniformLocations: { // ユニフォームの位置を調べる
        projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
        modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
    },
};

// 正方形の作成,描画
const buffers: buf.Buffers = buf.initBuffers(gl);
draw.drawScene(gl,programInfo, buffers);
