precision highp float;

varying vec2 vUv;

void main() {
  vUv = uv;  // uv is already provided by Three.js
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}