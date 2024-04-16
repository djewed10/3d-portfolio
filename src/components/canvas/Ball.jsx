import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';
const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <mesh castShadow receiveShadow scale={2.75}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color='#fff8eb'
        metalness={0.5} // Adjust metalness for a more metallic look
        roughness={0.5}
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      {<Decal position={[0, 0, 1]} scale={1} rotation={[2 * Math.PI, 0, 6]} map={decal} />}
    </mesh>
  );
};


const BallCanvas = ({ icon }) => {
  console.log('Icon:', icon); // Add this line for debugging
  return (
    <Canvas className='  cursor-grab my-20 h-[400px]' frameloop='demand' dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }} backgroundColor="black">
    <ambientLight intensity={0.5} />
    {/* Front directional light */}
    <directionalLight position={[5, 5, 5]} color="white" intensity={0.8} />
    {/* Back directional light */}
    <directionalLight position={[-5, -5, -5]} color="white" intensity={0.5} />
    <OrbitControls enableZoom={false} />
    <Suspense fallback={<CanvasLoader />}>
<Ball imgUrl={icon} />
  <Preload all />
      </Suspense>
    
  </Canvas>
  );
};

export default BallCanvas;
