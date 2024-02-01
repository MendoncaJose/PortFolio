import React from 'react';
import { Canvas } from '@react-three/fiber';
import { CubeTextureLoader } from 'three';

interface BackgroundProps {
  children?: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = (props) => {
  const cubeTextureLoader = new CubeTextureLoader();

  const cubeTexture = cubeTextureLoader.load([
    'path/to/posx.jpg',
    'path/to/negx.jpg',
    'path/to/posy.jpg',
    'path/to/negy.jpg',
    'path/to/posz.jpg',
    'path/to/negz.jpg',
  ]);

  return (
    <Canvas>
      <mesh>
        {/* Use the cubeTexture for the background */}
        <boxGeometry args={[100, 100, 100]} />
        <meshBasicMaterial attach="material" map={cubeTexture} side={2} />
      </mesh>
      {/* Your other 3D scene components go here */}
    </Canvas>
  );
};

export default Background;
