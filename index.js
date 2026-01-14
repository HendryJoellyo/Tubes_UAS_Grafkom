import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { gsap } from 'gsap';

const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({alpha: true,antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
cam.position.z = 25;
cam.position.y = 10;

// tekstur planet
const textureLoader = new THREE.TextureLoader();
const sunTexture = textureLoader.load('./img/2k_sun.jpg');
const merkuriTexture = textureLoader.load('./img/2k_mercury.jpg');
const venusTexture = textureLoader.load('./img/2k_venus_surface.jpg');
const bumiTexture = textureLoader.load('./img/2k_earth.jpg');
const marsTexture = textureLoader.load('./img/2k_mars.jpg');
const jupiterTexture = textureLoader.load('./img/2k_jupiter.jpg');
const saturnusTexture = textureLoader.load('./img/2k_saturn.jpg');
const ringTexture = textureLoader.load('./img/2k_saturn.jpg');
const uranusTexture = textureLoader.load('./img/2k_uranus.jpg');
const neptunusTexture = textureLoader.load('./img/2k_neptune.jpg');

//matahari
const matahari = new THREE.SphereGeometry(3, 64, 64);
const material_matahari = new THREE.MeshBasicMaterial({map: sunTexture});
const meshMatahari = new THREE.Mesh(matahari, material_matahari);
scene.add(meshMatahari);


//merkuri
const merkuri = new THREE.SphereGeometry(0.4, 64, 64);
const material_merkuri = new THREE.MeshStandardMaterial({map: merkuriTexture});
const meshMerkuri = new THREE.Mesh(merkuri, material_merkuri);
meshMerkuri.position.x = 1.5;
meshMerkuri.position.z = 5;

const merkuriOrbit = new THREE.Object3D();
scene.add(merkuriOrbit);
merkuriOrbit.add(meshMerkuri);

meshMerkuri.receiveShadow = true;

//venus
const venus = new THREE.SphereGeometry(0.6, 64, 64);
const material_venus = new THREE.MeshStandardMaterial({map: venusTexture});
const meshVenus = new THREE.Mesh(venus, material_venus);
meshVenus.position.x = 6.6;

const venusOrbit = new THREE.Object3D();
scene.add(venusOrbit);
venusOrbit.add(meshVenus);

meshVenus.receiveShadow = true;

//bumi
const bumi = new THREE.SphereGeometry(0.6, 64, 64);
const material_bumi = new THREE.MeshStandardMaterial({map: bumiTexture});
const meshBumi = new THREE.Mesh(bumi, material_bumi);
meshBumi.position.x = 7.2;
meshBumi.position.z = -5;

const earthOrbit = new THREE.Object3D();
scene.add(earthOrbit);
earthOrbit.add(meshBumi);

meshBumi.receiveShadow = true;


//mars
const mars = new THREE.SphereGeometry(0.4, 64, 64);
const material_mars = new THREE.MeshStandardMaterial({map: marsTexture});
const meshMars = new THREE.Mesh(mars, material_mars);
meshMars.position.x = -11;

const marsOrbit = new THREE.Object3D();
scene.add(marsOrbit);
marsOrbit.add(meshMars);

meshMars.receiveShadow = true;


//jupiter
const jupiter = new THREE.SphereGeometry(1.2, 64, 64);
const material_jupiter = new THREE.MeshStandardMaterial({map: jupiterTexture});
const meshJupiter = new THREE.Mesh(jupiter, material_jupiter);
meshJupiter.position.x = -10;
meshJupiter.position.z = -10;

const jupiterOrbit = new THREE.Object3D();
scene.add(jupiterOrbit);
jupiterOrbit.add(meshJupiter);

meshJupiter.receiveShadow = true;


//saturnus
const saturnus = new THREE.SphereGeometry(1, 64, 64);
const material_saturnus = new THREE.MeshStandardMaterial({map: saturnusTexture});
const meshSaturnus = new THREE.Mesh(saturnus, material_saturnus);
meshSaturnus.position.x = 18;

const saturnusOrbit = new THREE.Object3D();
scene.add(saturnusOrbit);
saturnusOrbit.add(meshSaturnus);

const ringSaturnus = new THREE.RingGeometry( 1, 2, 32);
const material_ring = new THREE.MeshStandardMaterial({ map: ringTexture, side: THREE.DoubleSide, transparent: true });
const meshRing = new THREE.Mesh( ringSaturnus, material_ring );
meshRing.position.set(0,0,0)
meshRing.rotation.x = -Math.PI / 3;
meshSaturnus.add( meshRing);

meshRing.castShadow = true;
meshRing.receiveShadow = true;

meshSaturnus.castShadow = true;
meshSaturnus.receiveShadow = true;


//uranus
const uranus = new THREE.SphereGeometry(1, 64, 64);
const material_uranus = new THREE.MeshStandardMaterial({map: uranusTexture});
const meshUranus = new THREE.Mesh(uranus, material_uranus);
meshUranus.position.x = 1;
meshUranus.position.z = 21;

const uranusOrbit = new THREE.Object3D();
scene.add(uranusOrbit);
uranusOrbit.add(meshUranus);
meshUranus.castShadow = true;
meshUranus.receiveShadow = true;

//neptunus
const neptunus = new THREE.SphereGeometry(1, 64, 64);
const material_neptunus = new THREE.MeshStandardMaterial({map: neptunusTexture});
const meshNeptunus = new THREE.Mesh(neptunus, material_neptunus);

meshNeptunus.position.x = -25.5;
meshNeptunus.position.z = -5;

const neptunusOrbit = new THREE.Object3D();
scene.add(neptunusOrbit);
neptunusOrbit.add(meshNeptunus);
meshNeptunus.castShadow = true;
meshNeptunus.receiveShadow = true;


const SpotLight = new THREE.SpotLight( 0xffffff, 50, 1000 );
SpotLight.position.copy(meshMatahari.position);
scene.add( SpotLight );

const SpotLight2 = new THREE.SpotLight( 0xffffff, 50, 1000 );
SpotLight2.position.copy(meshMatahari.position);
scene.add( SpotLight2 );

const SpotLight3 = new THREE.SpotLight( 0xffffff, 50, 1000 );
SpotLight3.position.copy(meshMatahari.position);
scene.add( SpotLight3 );

const SpotLight4= new THREE.SpotLight( 0xffffff, 50, 1000 );
SpotLight4.position.copy(meshMatahari.position);
scene.add( SpotLight4 );

const SpotLight5 = new THREE.SpotLight( 0xffffff, 50, 1000 );
SpotLight5.position.copy(meshMatahari.position);
scene.add( SpotLight5 );

const SpotLight6 = new THREE.SpotLight( 0xffffff, 50, 1000 );
SpotLight6.position.copy(meshMatahari.position);
scene.add( SpotLight6 );

const SpotLight7 = new THREE.SpotLight( 0xffffff, 50, 1000 );
SpotLight7.position.copy(meshMatahari.position);
scene.add( SpotLight7 );

const SpotLight8 = new THREE.SpotLight( 0xffffff, 50, 1000 );
SpotLight8.position.copy(meshMatahari.position);
scene.add( SpotLight8 );

const SpotLight9 = new THREE.SpotLight( 0xffffff, 50, 1000 );
SpotLight9.position.copy(meshMatahari.position);
scene.add( SpotLight9 );

const SpotLight10 = new THREE.SpotLight( 0xffffff, 50, 1000 );
SpotLight10.position.copy(meshMatahari.position);
scene.add( SpotLight10 );

const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

SpotLight.target = meshMerkuri;
SpotLight2.target = meshVenus;
SpotLight3.target = meshBumi;
SpotLight4.target = meshMars;
SpotLight5.target = meshJupiter;
SpotLight6.target = meshSaturnus;
SpotLight7.target = meshRing;
SpotLight8.target = meshUranus;
SpotLight9.target = meshNeptunus;

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


meshMatahari.name = "Matahari";
meshMerkuri.name = "Merkuri";
meshVenus.name = "Venus";
meshBumi.name = "Bumi";
meshMars.name = "Mars";
meshJupiter.name = "Jupiter";
meshSaturnus.name = "Saturnus";
meshUranus.name = "Uranus";
meshNeptunus.name = "Neptunus";

const raycaster = new THREE.Raycaster();
const mouse = {};
const defaultCamPos = cam.position.clone();
const defaultTarget = orb_control.target.clone();

const planetConfig = {
  Matahari: { mesh: meshMatahari, offsetZ: 10, desc: "Matahari adalah bintang di pusat tata surya kita. Ini adalah bola plasma yang sangat panas yang memancarkan cahaya dan energi yang menopang kehidupan di Bumi." },
  Merkuri:  { mesh: meshMerkuri,  offsetZ: 4, desc: "Merkuri adalah planet terdekat dengan Matahari dan yang terkecil di tata surya kita. Permukaannya berbatu dan penuh kawah, mirip dengan Bulan." },
  Venus:    { mesh: meshVenus,    offsetZ: 4, desc: "Venus adalah planet kedua dari Matahari dan planet terpanas di tata surya kita. Atmosfernya sangat tebal dan penuh dengan gas rumah kaca." },
  Bumi:     { mesh: meshBumi,     offsetZ: 4, desc: "Bumi adalah planet ketiga dari Matahari dan satu-satunya planet yang diketahui mendukung kehidupan." },
  Mars:     { mesh: meshMars,     offsetZ: 3, desc: "Mars adalah planet keempat dari Matahari dan dikenal sebagai planet merah karena oksida besi di permukaannya." },
  Jupiter:  { mesh: meshJupiter,  offsetZ: 7, desc: "Jupiter adalah planet kelima dari Matahari dan raksasa gas terbesar di tata surya kita. Ia memiliki cincin yang tipis dan banyak bulan." },
  Saturnus: { mesh: meshSaturnus, offsetZ: 7, desc: "Saturnus adalah planet keenam dari Matahari dan dikenal karena cincinnya yang sangat menonjol." },
  Uranus:   { mesh: meshUranus,   offsetZ: 6, desc: "Uranus adalah planet ketujuh dari Matahari dan dikenal karena rotasi miringnya yang ekstrem." },
  Neptunus: { mesh: meshNeptunus, offsetZ: 6, desc: "Neptunus adalah planet kedelapan dari Matahari dan planet terjauh di tata surya kita. Ia memiliki angin tercepat di antara planet-planet." }
};

function zoomToPlanet(mesh, offsetZ) {
  gsap.to(cam.position, {
    x: mesh.position.x,
    y: mesh.position.y,
    z: mesh.position.z + offsetZ,
    duration: 2,
    ease: "power2.out"
  });

  gsap.to(orb_control.target, {
    x: mesh.position.x,
    y: mesh.position.y,
    z: mesh.position.z,
    duration: 2,
    ease: "power2.out"
  });
}

function zoomOut() {
  gsap.to(cam.position, {
    x: defaultCamPos.x,
    y: defaultCamPos.y,
    z: defaultCamPos.z,
    duration: 2,
    ease: "power2.out"
  });

  gsap.to(orb_control.target, {
    x: defaultTarget.x,
    y: defaultTarget.y,
    z: defaultTarget.z,
    duration: 2,
    ease: "power2.out"
  });

  isZoomed = false;
  currentPlanet = null;
}

// bantuan AI
const popup = document.getElementById("planetPopup");
const popupName = document.getElementById("planetName");
const popupDesc = document.getElementById("planetDesc");

function showPopup(name, desc) {
  popupName.textContent = name;
  popupDesc.textContent = desc;
  popup.classList.remove("hidden");
}

// --------

let isZoomed = false;

addEventListener('mousedown', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, cam);
  const items = raycaster.intersectObjects(scene.children, true);

  if (items.length > 0) {
    const obj = items[0].object;
    const config = planetConfig[obj.name];
  
    zoomToPlanet(config.mesh, config.offsetZ);
    showPopup(obj.name, config.desc);
    isZoomed = true;
    currentPlanet = obj.name;
  } else {
    popup.classList.add("hidden");
    if (isZoomed) {
      zoomOut();
    }
  }         

});

function draw() {
    orb_control.update();
    meshMatahari.rotation.y += 0.002;
    meshMerkuri.rotation.y += 0.002;
    meshVenus.rotation.y += 0.002;
    meshBumi.rotation.y += 0.01;
    meshMars.rotation.y += 0.002;
    meshJupiter.rotation.y += 0.002;
    meshSaturnus.rotation.y += 0.002;
    meshUranus.rotation.y += 0.002;
    meshNeptunus.rotation.y += 0.002;

    renderer.render(scene, cam);
    requestAnimationFrame(draw);
}
draw();