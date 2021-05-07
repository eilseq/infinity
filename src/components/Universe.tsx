import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import TrackballControls from "../webgl/three.trackballcontrols";
import { createGalaxyVertices, galaxyMaterial } from "../webgl/galaxy";
import "./Universe.sass";

export default function Universe() {
  const container = useRef(null);
  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    console.log(container.current);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(70, w / h, 0.5, 1500);
    camera.position.set(Math.random() * -20, -155, 90);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(w, h);

    renderer.setClearColor(0x0000000);
    container.current.appendChild(renderer.domElement);

    container.current.addEventListener(
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

    function animate() {
      if (scanPulse) t += 0.7;
      if (destroyPulse) z += 0.7;
      galaxyMaterial.uniforms.t.value = t;
      galaxyMaterial.uniforms.z.value = z;
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      scene.rotation.z += 0.001;
      controls.update();
    }
    createGalaxy();
    createGalaxy();
    animate();
  }, []);

  return <div ref={container} className="universe"></div>;
}
