import * as THREE from 'three';
import { createScene } from './scene';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Use an OrthographicCamera sized to the window
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 10);
camera.position.z = 1; // looking straight at the plane

const { scene, material } = createScene();
const clock = new THREE.Clock();

function animate(): void {
  requestAnimationFrame(animate);

  material.uniforms.time.value = clock.getElapsedTime();

  renderer.render(scene, camera);
}
animate();

// Resize logic (custom for ortho cam)
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
});