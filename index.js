import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({alpha: true,antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

cam.position.z = 5;
const textureLoader = new THREE.TextureLoader();
const sunTexture = textureLoader.load('./img/2k_sun.jpg');
//matahri
const geo = new THREE.SphereGeometry(1, 64, 64);
const material = new THREE.MeshBasicMaterial({map: sunTexture});
const mesh = new THREE.Mesh(geo, material);
scene.add(mesh);

//merkuri
const merkuriTexture = textureLoader.load('./img/2k_mercury.jpg');
const geo2 = new THREE.SphereGeometry(0.4, 64, 64);
const material2 = new THREE.MeshStandardMaterial({map: merkuriTexture});
const mesh2 = new THREE.Mesh(geo2, material2);
mesh2.position.x = 3;
scene.add(mesh2);

const light = new THREE.PointLight(0xffffff,100);
light.position.set(0, 0, 5);
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 10 );
directionalLight.position.set( 5, 10, 5 );
directionalLight.target = mesh2;
scene.add( directionalLight);
scene.add( directionalLight.target );

const orb_control = new OrbitControls(cam, renderer.domElement);

function draw() {
    orb_control.update();
    mesh.rotation.y += 0.002;
    mesh2.rotation.y += 0.002;
    renderer.render(scene, cam);
    requestAnimationFrame(draw);
}
draw();

