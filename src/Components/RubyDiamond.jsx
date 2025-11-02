import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
const RubyDiamond = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 3000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setClearColor(0xffffff, 0);
    // Define the vertices for a 3D diamond shape with depth
    const vertices = new Float32Array([
      // Front face points
      -25, 50, 25,    // 0: top left front
      25, 50, 25,     // 1: top right front
      50, 0, 25,      // 2: right front
      0, -85, 25,     // 3: bottom front
      -50, 0, 25,     // 4: left front
      // Back face points
      -25, 50, -25,   // 5: top left back
      25, 50, -25,    // 6: top right back
      50, 0, -25,     // 7: right back
      0, -85, -25,    // 8: bottom back
      -50, 0, -25,    // 9: left back
      // Center top and bottom points
      0, 65, 0,      // 10: center top
      0, -100, 0,    // 11: center bottom
    ]);

    // Define triangles for all faces of the 3D diamond
    const indices = new Uint16Array([
      // Top pyramid faces
      10, 0, 1,    // front top
      10, 1, 6,    // right top
      10, 6, 5,    // back top
      10, 5, 0,    // left top
      
      // Front faces
      4, 0, 1,     // front upper
      4, 1, 2,     // front right
      4, 2, 3,     // front lower
      4, 3, 0,     // front left
      
      // Back faces
      9, 5, 6,     // back upper
      9, 6, 7,     // back right
      9, 7, 8,     // back lower
      9, 8, 5,     // back left
      
      // Bottom pyramid faces
      11, 3, 2,    // front bottom
      11, 2, 7,    // right bottom
      11, 7, 8,    // back bottom
      11, 8, 3,    // left bottom
      
      // Side connector faces
      1, 2, 7,     // right side front
      1, 7, 6,     // right side back
      0, 5, 9,     // left side back
      0, 9, 4,     // left side front
    ]);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometry.setIndex(new THREE.BufferAttribute(indices, 1));
    geometry.computeVertexNormals(); // Important for proper lighting

    // Create a physical material that looks like a gem
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xe0115f,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.6,
      thickness: 0.5,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      side: THREE.DoubleSide
    });

    const diamond = new THREE.Mesh(geometry, material);
    diamond.scale.set(1.5, 1.5, 1.5);

    // Enhanced lighting for better 3D appearance
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    
    // Key light from front
    const frontLight = new THREE.PointLight(0xffffff, 1.5, 3000);
    frontLight.position.set(0, 0, 1000);
    
    // Fill light from back
    const backLight = new THREE.PointLight(0xffffff, 0.8, 3000);
    backLight.position.set(0, 0, -1000);
    
    // Rim lights for sparkle
    const topLight = new THREE.PointLight(0xffffff, 1.0, 3000);
    topLight.position.set(0, 1000, 0);
    scene.add(diamond);
    scene.add(ambientLight);
    scene.add(frontLight);
    scene.add(backLight);
    scene.add(topLight);
    
    // Position camera closer to see the 3D effect better
    camera.position.z = 400;
    function animate() {
      requestAnimationFrame(animate);
      // Rotate smoothly to show the 3D depth
      diamond.rotation.y += 0.01;
    //   diamond.rotation.x = Math.sin(Date.now() * 0.001) * 0.2;
      renderer.setSize(280, 220);
      renderer.render(scene, camera);
    }
    animate();
  }, []);
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <canvas ref={canvasRef} />
    </div>
  );
};
export default RubyDiamond;