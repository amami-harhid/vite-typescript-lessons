/**
 * 【13-01】WebGL / 入門
 *  初期表示（色をつけた画面を表示する）
 *  https://developer.mozilla.org/ja/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL
 */
import * as cvs from "./canvas";

const canvas = cvs.createCanvas();
const gl = cvs.getGL(canvas);

// クリアカラーを黒に設定し、完全に不透明する
gl.clearColor(0.0, 0.0, 0.0, 1.0);
// 指定されたクリアカラーでカラーバッファーをクリアする
gl.clear(gl.COLOR_BUFFER_BIT);