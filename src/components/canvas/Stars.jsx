import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import * as random from "maath/random/dist/maath-random.esm";
import { PointMaterial, Points } from '@react-three/drei';
const Stars = () => {
  const ref=useRef()
  const[sphere]=useState( ()=>random.inSphere(new Float32Array(5000),{radius:1.2}))
  useFrame((state,delta)=>{
    ref.current.rotation.x-=delta/10
    ref.current.rotation.y-=delta/15
  })
  return (
    <group rotation={[0,0, Math.PI / 4]}>
      <Points ref={ref} positions ={sphere}  >
      <PointMaterial transparent color="white" size={0.002} /></Points>
    </group>
  )
}
const StarsCanvas=()=>{
return(
  <div className='w-full h-auto absolute inset-0 z-[-1]'>
  <Canvas camera={{position:[0,0,1]}} >
    {/* <ambientLight intensity={.1}/> */}
    <Stars/>
  </Canvas></div>
)
}

export default StarsCanvas