/**
 * 頂点シェーダー
 * vec4 で受け取ることで
 * vec2, vec3 を代替することができる 
 */
export const vsSource = `
    attribute vec4 aVertexPosition;
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    void main() {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    }
  `;