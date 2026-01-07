import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({alpha: true,antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

cam.position.z = 25;
const textureLoader = new THREE.TextureLoader();
const sunTexture = textureLoader.load('./img/2k_sun.jpg');

//matahri
const geo = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshBasicMaterial({map: sunTexture});
const mesh = new THREE.Mesh(geo, material);
scene.add(mesh);

//merkuri
const merkuriTexture = textureLoader.load('./img/2k_mercury.jpg');
const geo2 = new THREE.SphereGeometry(0.4, 64, 64);
const material2 = new THREE.MeshStandardMaterial({map: merkuriTexture});
const mesh2 = new THREE.Mesh(geo2, material2);
mesh2.position.x = 5.2;

const merkuriOrbit = new THREE.Object3D();
scene.add(merkuriOrbit);
merkuriOrbit.add(mesh2);

mesh2.castShadow = true;
mesh2.receiveShadow = true;


//venus
const venusTexture = textureLoader.load('./img/2k_venus_surface.jpg');
const geo3 = new THREE.SphereGeometry(0.6, 64, 64);
const material3 = new THREE.MeshStandardMaterial({map: venusTexture});
const mesh3 = new THREE.Mesh(geo3, material3);
mesh3.position.x = 6.6;

const venusOrbit = new THREE.Object3D();
scene.add(venusOrbit);
venusOrbit.add(mesh3);

mesh3.castShadow = true;
mesh3.receiveShadow = true;


//bumi
const bumiTexture = textureLoader.load('./img/2k_earth.jpg');
const geo4 = new THREE.SphereGeometry(0.6, 64, 64);
const material4 = new THREE.MeshStandardMaterial({map: bumiTexture});
const mesh4 = new THREE.Mesh(geo4, material4);
mesh4.position.x = 9;

const earthOrbit = new THREE.Object3D();
scene.add(earthOrbit);
earthOrbit.add(mesh4);

mesh4.castShadow = true;
mesh4.receiveShadow = true;


//mars
const marsTexture = textureLoader.load('./img/2k_mars.jpg');
const geo5 = new THREE.SphereGeometry(0.4, 64, 64);
const material5 = new THREE.MeshStandardMaterial({map: marsTexture});
const mesh5 = new THREE.Mesh(geo5, material5);
mesh5.position.x = 11;

const marsOrbit = new THREE.Object3D();
scene.add(marsOrbit);
marsOrbit.add(mesh5);

mesh5.castShadow = true;
mesh5.receiveShadow = true;


//jupiter
const jupiterTexture = textureLoader.load('./img/2k_jupiter.jpg');
const geo6 = new THREE.SphereGeometry(1.2, 64, 64);
const material6 = new THREE.MeshStandardMaterial({map: jupiterTexture});
const mesh6 = new THREE.Mesh(geo6, material6);
mesh6.position.x = 14;

const jupiterOrbit = new THREE.Object3D();
scene.add(jupiterOrbit);
jupiterOrbit.add(mesh6);

mesh6.castShadow = true;
mesh6.receiveShadow = true;


//saturnus
const saturnusTexture = textureLoader.load('./img/2k_saturn.jpg');
const geo7 = new THREE.SphereGeometry(1, 64, 64);
const material7 = new THREE.MeshStandardMaterial({map: saturnusTexture});
const mesh7 = new THREE.Mesh(geo7, material7);
mesh7.position.x = 18;

const saturnusOrbit = new THREE.Object3D();
scene.add(saturnusOrbit);
saturnusOrbit.add(mesh7);

const ringTexture = textureLoader.load('./img/2k_saturn.jpg');
const geoRing = new THREE.RingGeometry( 1, 2, 32);
const materialRing = new THREE.MeshStandardMaterial({
  map: ringTexture,
  side: THREE.DoubleSide,
  transparent: true
});
const meshRing = new THREE.Mesh( geoRing, materialRing );
meshRing.position.set(0,0,0)
meshRing.rotation.x = -Math.PI / 3;
mesh7.add( meshRing);

meshRing.castShadow = true;
meshRing.receiveShadow = true;

mesh7.castShadow = true;
mesh7.receiveShadow = true;


//uranus
const uranusTexture = textureLoader.load('./img/2k_uranus.jpg');
const geo8 = new THREE.SphereGeometry(1, 64, 64);
const material8 = new THREE.MeshStandardMaterial({map: uranusTexture});
const mesh8 = new THREE.Mesh(geo8, material8);
mesh8.position.x = 21;

const uranusOrbit = new THREE.Object3D();
scene.add(uranusOrbit);
uranusOrbit.add(mesh8);

mesh8.castShadow = true;
mesh8.receiveShadow = true;

//neptunus
const neptunusTexture = textureLoader.load('./img/2k_neptune.jpg');
const geo9 = new THREE.SphereGeometry(1, 64, 64);
const material9 = new THREE.MeshStandardMaterial({map: neptunusTexture});
const mesh9 = new THREE.Mesh(geo9, material9);
mesh9.position.x = 26;

const neptunusOrbit = new THREE.Object3D();
scene.add(neptunusOrbit);
neptunusOrbit.add(mesh9);
mesh8.castShadow = true;
mesh8.receiveShadow = true;


const SpotLight = new THREE.SpotLight( 0xffffff, 50, 1000 );
SpotLight.position.copy(mesh.position);
scene.add( SpotLight );

const SpotLight2 = new THREE.SpotLight( 0xffffff, 50, 1000 );
SpotLight2.position.copy(mesh.position);
scene.add( SpotLight2 );

const SpotLight3 = new THREE.SpotLight( 0xffffff, 50, 1000 );
SpotLight3.position.copy(mesh.position);
scene.add( SpotLight3 );

const SpotLight4= new THREE.SpotLight( 0xffffff, 50, 1000 );
SpotLight4.position.copy(mesh.position);
scene.add( SpotLight4 );

const SpotLight5 = new THREE.SpotLight( 0xffffff, 50, 1000 );
SpotLight5.position.copy(mesh.position);
scene.add( SpotLight5 );

const SpotLight6 = new THREE.SpotLight( 0xffffff, 50, 1000 );
SpotLight6.position.copy(mesh.position);
scene.add( SpotLight6 );

const SpotLight7 = new THREE.SpotLight( 0xffffff, 50, 1000 );
SpotLight7.position.copy(mesh.position);
scene.add( SpotLight7 );

const SpotLight8 = new THREE.SpotLight( 0xffffff, 50, 1000 );
SpotLight8.position.copy(mesh.position);
scene.add( SpotLight8 );

const SpotLight9 = new THREE.SpotLight( 0xffffff, 50, 1000 );
SpotLight9.position.copy(mesh.position);
scene.add( SpotLight9 );

const SpotLight10 = new THREE.SpotLight( 0xffffff, 50, 1000 );
SpotLight10.position.copy(mesh.position);
scene.add( SpotLight10 );

const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

SpotLight.target = mesh2;
SpotLight2.target = mesh3;
SpotLight3.target = mesh4;
SpotLight4.target = mesh5;
SpotLight5.target = mesh6;
SpotLight6.target = mesh7;
SpotLight7.target = meshRing;
SpotLight8.target = mesh8;
SpotLight9.target = mesh9;

//garis orbit1
const garisOrbit1 = new THREE.RingGeometry( 5.1, 5.11, 60 );
const garisMaterial1 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const meshGaris1 = new THREE.Mesh( garisOrbit1, garisMaterial1 );
meshGaris1.rotation.x = - Math.PI / 2;
scene.add( meshGaris1 );

//garis orbit2
const garisOrbit2 = new THREE.RingGeometry( 6.5, 6.51, 60 );
const garisMaterial2 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const meshGaris2 = new THREE.Mesh( garisOrbit2, garisMaterial2 );
meshGaris2.rotation.x = - Math.PI / 2;
scene.add( meshGaris2 );

//garis orbit3
const garisOrbit3 = new THREE.RingGeometry( 8.9, 8.91, 60 );  
const garisMaterial3 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const meshGaris3 = new THREE.Mesh( garisOrbit3, garisMaterial3 );
meshGaris3.rotation.x = - Math.PI / 2;
scene.add( meshGaris3 );

//garis4
const garisOrbit4 = new THREE.RingGeometry( 11, 11.01, 60 );
const garisMaterial4 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const meshGaris4 = new THREE.Mesh( garisOrbit4, garisMaterial4 );
meshGaris4.rotation.x = - Math.PI / 2;
scene.add( meshGaris4 );

//garis5
const garisOrbit5 = new THREE.RingGeometry( 14, 14.01, 60 );
const garisMaterial5 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const meshGaris5 = new THREE.Mesh( garisOrbit5, garisMaterial5 );
meshGaris5.rotation.x = - Math.PI / 2;
scene.add( meshGaris5 );

//garis6
const garisOrbit6 = new THREE.RingGeometry( 18, 18.01, 60 );
const garisMaterial6 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const meshGaris6 = new THREE.Mesh( garisOrbit6, garisMaterial6 );
meshGaris6.rotation.x = - Math.PI / 2;
scene.add( meshGaris6 );

//garis7
const garisOrbit7 = new THREE.RingGeometry( 21, 21.01, 60 );
const garisMaterial7 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const meshGaris7 = new THREE.Mesh( garisOrbit7, garisMaterial7 );
meshGaris7.rotation.x = - Math.PI / 2;
scene.add( meshGaris7 );

//garis8
const garisOrbit8 = new THREE.RingGeometry( 26, 26.01, 60 );
const garisMaterial8 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const meshGaris8 = new THREE.Mesh( garisOrbit8, garisMaterial8 );
meshGaris8.rotation.x = - Math.PI / 2;
scene.add( meshGaris8 );

const orb_control = new OrbitControls(cam, renderer.domElement);

function draw() {
    orb_control.update();
    mesh.rotation.y += 0.002;

    mesh2.rotation.y += 0.002;
    merkuriOrbit.rotation.y -= 0.002;

    mesh3.rotation.y += 0.002;
    venusOrbit.rotation.y += 0.002;

    mesh4.rotation.y += 0.01;
    earthOrbit.rotation.y -= 0.003;

    mesh5.rotation.y += 0.002;
    marsOrbit.rotation.y -= 0.004;

    mesh6.rotation.y += 0.002;
    jupiterOrbit.rotation.y -= 0.002;

    mesh7.rotation.y += 0.002;
    saturnusOrbit.rotation.y -= 0.004;

    mesh8.rotation.y += 0.002;
    uranusOrbit.rotation.y -= 0.003;

    mesh9.rotation.y += 0.002;
    neptunusOrbit.rotation.y += 0.001;
    renderer.render(scene, cam);
    requestAnimationFrame(draw);
}
draw();

