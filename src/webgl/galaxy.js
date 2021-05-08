//solutioon refactored from public pen https://codepen.io/Astrak/pen/BoBWPB

import * as THREE from "three";
import TrackballControls from "./three.trackballcontrols";
import { vertexShader, fragmentShader } from "./shaders";

export const galaxyMaterial = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: {
    size: { type: "f", value: 3.3 },
    t: { type: "f", value: 0 },
    z: { type: "f", value: 0 },
    pixelRatio: { type: "f", value: innerHeight },
  },
  transparent: true,
  depthTest: false,
  blending: THREE.AdditiveBlending,
});

export function createGalaxyVertices(
  _n,
  _axis1,
  _axis2,
  _armsAngle,
  _bulbSize,
  _ellipticity
) {
  var n = typeof _n === "undefined" ? 10000 : _n;

  //to get 'arms', the main galaxy shape has to be an ellipse, i.e. axis1/axis2 must raise over a certain %
  //otherwise, because of the 'ellipticity' z-profile problem, you get a potatoe
  var axis1 = typeof _axis1 === "undefined" ? 60 + Math.random() * 20 : _axis1;
  var axis2 =
    typeof _axis2 === "undefined" ? axis1 + 20 + Math.random() * 40 : _axis2;
  //make sure axis1 is the biggest (excentricity equation fails if they are inverted), and allow the coder no to care about axis order
  var maja, mina;
  axis1 > axis2
    ? ((maja = axis1), (mina = axis2))
    : axis1 == axis2
    ? ((maja = axis1 + 1), (mina = axis2))
    : ((maja = axis2), (mina = axis1));

  //radians from the center to the end of each arm, proposed value range : between 3 and 13
  var armsAngle =
    typeof _armsAngle === "undefined"
      ? (Math.random() * 2 - 1 > 0 ? 1 : -1) * 12 + 3
      : _armsAngle;

  //core proportion in the (x,y) plane, between 0 and 1, proposed value range : between .1 and .8
  var bulbSize =
    typeof _bulbSize === "undefined"
      ? Math.random() * 0.6
      : _bulbSize > 1
      ? 1
      : _bulbSize < 0
      ? 0
      : _bulbSize;

  //'ellipticity' : not found a better word to name the degree of 'elliptic' Hubble type.
  //'ellipticity' is what is mainly responsible of the z-profile in this experiment.
  //Range : between 0 and 1. Proposed : .2 to .4
  //TODO: implement string handling (or value from spacename ?) to create Hubble-class galaxy ala 'SBb'...
  var ellipticity =
    typeof _ellipticity === "undefined"
      ? 0.2 + Math.random() * 0.2
      : _ellipticity > 1
      ? 1
      : _ellipticity < 0
      ? 0
      : _ellipticity;

  var stars = [];

  for (var i = 0; i < n; i++) {
    var dist = Math.random();
    var angle = (dist - bulbSize) * armsAngle;

    //ellipse parameters
    var a = maja * dist;
    var b = mina * dist;
    var e = Math.sqrt(a * a - b * b) / a;
    var phi =
      ((ellipticity * Math.PI) / 2) * (1 - dist) * (Math.random() * 2 - 1);

    //create point on the ellipse with polar coordinates
    //1. random angle from the center
    var theta = Math.random() * Math.PI * 2;
    //2. deduce radius from theta in polar coordinates, from the CENTER of an ellipse, plus variations
    var radius =
      Math.sqrt((b * b) / (1 - e * e * Math.pow(Math.cos(theta), 2))) *
      (1 + Math.random() * 0.1);
    //3. then shift theta with the angle offset to get arms, outside the bulb
    if (dist > bulbSize) theta += angle;

    //convert to cartesian coordinates
    stars.push(
      Math.cos(phi) * Math.cos(theta) * radius, //x
      Math.cos(phi) * Math.sin(theta) * radius, //y
      Math.sin(phi) * radius //z
    );
  }

  return stars;
}

export function createUniverse() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(70, w / h, 0.5, 1500);
  camera.position.set(Math.random() * -20, -155, 90);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(w, h);
  renderer.setClearColor(0x0000000);

  window.addEventListener(
    "resize",
    () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      renderer.setSize(w, h);
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    },
    false
  );

  const controls = new TrackballControls(camera, renderer.domElement);
  controls.noPan = true;
  controls.noZoom = true;
  controls.rotateSpeed = 20;
  controls.dynamicDampingFactor = 0.5;

  var t = 0,
    z = 100,
    scanPulse = false,
    destroyPulse = false;

  function createGalaxy() {
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array(
      createGalaxyVertices(
        Math.random() * 10000,
        Math.random() * 1000,
        Math.random() * 1000
      )
    );
    geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    geometry.translate(
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 100
    );
    scene.add(new THREE.Points(geometry, galaxyMaterial));
  }

  let frameCounter = 0;
  function animate() {
    if (scanPulse) t += 0.7;
    if (destroyPulse) z += 0.7;
    galaxyMaterial.uniforms.t.value = t;
    galaxyMaterial.uniforms.z.value = z;
    frameCounter = requestAnimationFrame(animate);
    renderer.render(scene, camera);
    scene.rotation.z += 0.001;
    controls.update();
  }

  function start() {
    animate();
  }

  function stop() {
    cancelAnimationFrame(frameCounter);
  }

  createGalaxy();
  createGalaxy();

  const { domElement } = renderer;
  return {
    domElement,
    start,
    stop,
  };
}
