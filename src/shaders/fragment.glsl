precision highp float;

uniform float time;
varying vec2 vUv;

void main() {
  float wave = sin(vUv.x * 10.0 + time) * 0.5 + 0.5;
  vec3 color1 = vec3(0.1, 0.6, 1.0);
  vec3 color2 = vec3(1.0, 0.2, 0.6);
  vec3 finalColor = mix(color1, color2, wave * vUv.y);
  gl_FragColor = vec4(finalColor, 1.0);
}