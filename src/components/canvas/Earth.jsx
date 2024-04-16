import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react'
import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  
  return (
    <mesh  >
      
<primitive   object={earth.scene} scale={2} position-y={0} rotation-y={0} />

    </mesh>
  )
}
const EarthCanvas=()=>{
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return(
    <div style={isMobile?{height:"300px",cursor:"pointer"}: {height: '450px',cursor:"pointer" }}> 
<Canvas shadows frameloop='demand'   camera={{  position:[-4, 3, 10],fov:45 }}>
  <ambientLight intensity={3}/>
  <OrbitControls autoRotate enableZoom={false}  maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}/>
            <Suspense fallback={<CanvasLoader />}>
  <Earth/>
  <Preload all />
      </Suspense>
</Canvas></div>)
}
export default EarthCanvas