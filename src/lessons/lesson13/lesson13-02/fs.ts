/**
 * フラグメントシェーダー
 * フラグメントシェーダーは描画される各図形のすべてのピクセルに
 * 対して 1 回ずつ呼び出されます
 */
export const fsSource = `
    void main() {
      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
`;