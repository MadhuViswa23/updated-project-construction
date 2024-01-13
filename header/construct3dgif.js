// src/components/ThreeDVideo.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDVideo = () => {
  const videoRef = useRef();

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('video-container').appendChild(renderer.domElement);

    // Create a video texture
    const video = videoRef.current;
    const texture = new THREE.VideoTexture(video);
    const material = new THREE.MeshBasicMaterial({ map: texture });

    // Create a plane with the video texture
    const geometry = new THREE.PlaneGeometry(16 / 9, 1); // Assuming a 16:9 aspect ratio
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Animate the scene
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      document.getElementById('video-container').removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div id="video-container">
      <video ref={videoRef} width="640" height="360" controls>
        <source src="https://youtu.be/AOIeoPwpe6E?si=tFYF6UbPd6kOYix8" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ThreeDVideo;
