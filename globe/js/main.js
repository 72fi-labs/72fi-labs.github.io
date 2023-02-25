// Set up the scene, camera, and renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a globe with a material and add it to the scene
var loader = new THREE.TextureLoader();
loader.load('img/earth.jpg', function(texture) {
  var geometry = new THREE.SphereGeometry(1, 32, 32);
  var material = new THREE.MeshBasicMaterial({map: texture});
  var globe = new THREE.Mesh(geometry, material);
  scene.add(globe);
});

// Set up an animation loop that rotates the globe
function animate() {
  requestAnimationFrame(animate);
  globe.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
