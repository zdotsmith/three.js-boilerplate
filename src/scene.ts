import * as THREE from 'three';

export function createScene() {
  const scene = new THREE.Scene();

  // Example mesh: cube with standard material
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({ color: 0x00ffcc });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Light
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(2, 2, 5);
  scene.add(light);

  return { scene, cube };
}