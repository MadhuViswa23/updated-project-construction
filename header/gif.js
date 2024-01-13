// src/components/ConstructionBuilding.js
import React, { useEffect } from 'react';
import * as THREE from 'three';
import GIF from 'gif.js';

const ConstructionBuilding = () => {
  useEffect(() => {
    // ... (previous code)

    // Create a GIF instance
    const gif = new GIF();

    // Capture frames for the GIF
    const captureFrame = () => {
      const imageData = renderer.domElement.toDataURL('image/png');
      gif.addFrame(imageData, { delay: 16 });
    };

    // Animate the building and capture frames
    const animate = () => {
      requestAnimationFrame(animate);
      // Add your building animation logic here
      renderer.render(scene, camera);
      captureFrame();
    };

    animate();

    // Save the GIF on unmount
    return () => {
      gif.on('finished', (blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'construction-building.gif';
        a.click();
        URL.revokeObjectURL(url);
      });
      gif.render();
    };
  }, []);

  return <div id="building-container" />;
};

export default ConstructionBuilding;
