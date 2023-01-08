

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the Physijs library and set up the physics world
Physijs.scripts.worker = '/js/physijs_worker.js';
Physijs.scripts.ammo = '/js/ammo.js';
const physicsWorld = new Physijs.Scene();
physicsWorld.setGravity(new THREE.Vector3(0, -10, 0));

const geometry = new THREE.SphereGeometry(1, 32, 32);

// Create a white light that will be used to illuminate the scene
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 0, 0);
physicsWorld.add(light);

for (let i = 0; i < 14; i++) {
  // Use a random color for each ball
  const material = new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff });
  const mesh = new THREE.Mesh(geometry, material);

  // Set the ball's position and scale to random values
  mesh.position.x = Math.random() * 10 - 5;
  mesh.position.y = Math.random() * 10 - 5;
  mesh.position.z = Math.random() * 10 - 5;
  mesh.scale.x = mesh.scale.y = mesh.scale.z = 1;

  // Set up the ball's physics body
  const ballBody = new Physijs.SphereMesh(geometry, material, 1);
  ballBody.position.copy(mesh.position);
  ballBody.scale.copy(mesh.scale);
  ballBody.setCcdMotionThreshold(1);
  ballBody.setCcdSweptSphereRadius(0.2);
  ballBody.addEventListener('collision', function(other_object) {
    if (other_object.isMesh) {
      // Set the ball's velocity to zero when it collides with another object
      ballBody.setLinearVelocity(new THREE.Vector3(0, 0, 0));
      ballBody.setAngularVelocity(new THREE.Vector3(0, 0, 0));
    }
  });
  physicsWorld.add(ballBody);
}

// Create a plane to act as the ground
const groundGeometry = new THREE.PlaneGeometry(20, 20);
const groundMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
const ground = new Physijs.PlaneMesh(groundGeometry, groundMaterial, 0);
ground.rotation.x = -Math.PI / 2;
physicsWorld.add(ground);

function animate() {
  requestAnimationFrame(animate);

  // Simulate physics
  physicsWorld.simulate();
  renderer.render(physicsWorld, camera);
}

animate();
