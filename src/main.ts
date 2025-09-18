import * as THREE from 'three';
import { createScene } from './scene';
import { onWindowResize } from './utils/resize';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 3;

const { scene, cube } = createScene();

// Resize handling
window.addEventListener('resize', () => onWindowResize(camera, renderer));

// Animation loop
function animate(): void {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate(); 