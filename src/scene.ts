import * as THREE from 'three';

// Import shaders
import vertexShader from './shaders/vertex.glsl?raw';
import fragmentShader from './shaders/fragment.glsl?raw';

export function createScene() {
  const scene = new THREE.Scene();

  const geometry = new THREE.PlaneGeometry(2, 2); // fullscreen plane
  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      time: { value: 0.0 }
    }
  });

  const plane = new THREE.Mesh(geometry, material);
  scene.add(plane);

  return { scene, material };
}