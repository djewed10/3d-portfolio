import React, { useEffect } from 'react'

import {Tilt} from "react-tilt"
import { styles } from '../styles'
import gsap from 'gsap'

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
const Works = () => {
  useEffect(()=>{gsap.fromTo(".ii",{x:"-700%",},{scrollTrigger:{trigger:".ii",toggleActions:"restart none none none"},x:0, stagger:.6, duration:1})},[])
  
  return (
  <div className=' my-20'>
  <h2 className={`${styles.sectionHeadText} text-center my-20`} id="works">
          my projects:
        </h2>
    <div className=' ww grid grid-cols-2  max-md max-md:grid-cols-1 mx-20    ' >
      
      <Tilt options={{ 
  reverse: false,  // Reverse the tilt direction
  max: 25,         // Maximum tilt rotation (degrees)
  perspective: 1000, // Perspective value
  scale: 1.1,      // Scale factor for the element during the tilt
  speed: 300,      // Tilt transition speed (milliseconds)
  transition: true, // Enable or disable tilt transition
  axis: null,      // Specify tilt axis (x, y, or null for both)
  reset: true,     // Reset tilt back to its initial state on mouseout
  easing: "cubic-bezier(.03,.98,.52,.99)"}} >
<div className=' workss ii border-4 rounded-full max-md:rounded-xl lg:rounded-3xl border-fuchsia-400  relative' > 
<img className=' mx-auto my-4 rounded-xl  w-[50%]' src='/Capture d’écran (38).png' alt=''></img>
   <h1 className=' my-5  text-center    max-sm:text-md font-serif lg:text-2xl  text-lg max-sm:text-sm '>full web site of parapharmacy and aesthetics products</h1>
</div></Tilt>
<Tilt options={{ 
  reverse: false,  // Reverse the tilt direction
  max: 25,         // Maximum tilt rotation (degrees)
  perspective: 1000, // Perspective value
  scale: 1.1,      // Scale factor for the element during the tilt
  speed: 300,      // Tilt transition speed (milliseconds)
  transition: true, // Enable or disable tilt transition
  axis: null,      // Specify tilt axis (x, y, or null for both)
  reset: true,     // Reset tilt back to its initial state on mouseout
  easing: "cubic-bezier(.03,.98,.52,.99)"}} >
<div className=' workss ii border-4 rounded-full max-md:rounded-xl lg:rounded-3xl border-fuchsia-400  relative' > 
<img className=' mx-auto my-4 rounded-xl  w-[60%]' src='/Capture d’écran (45).png' alt=''></img>
   <h1 className=' my-9  text-center    max-sm:text-md font-serif lg:text-2xl  text-lg max-sm:text-sm '>full  job seeking web site</h1> 
</div></Tilt>
<Tilt options={{ 
  reverse: false,  // Reverse the tilt direction
  max: 25,         // Maximum tilt rotation (degrees)
  perspective: 1000, // Perspective value
  scale: 1.1,      // Scale factor for the element during the tilt
  speed: 300,      // Tilt transition speed (milliseconds)
  transition: true, // Enable or disable tilt transition
  axis: null,      // Specify tilt axis (x, y, or null for both)
  reset: true,     // Reset tilt back to its initial state on mouseout
  easing: "cubic-bezier(.03,.98,.52,.99)"}} >
<div className=' workss ii border-4 rounded-full max-md:rounded-xl lg:rounded-3xl border-fuchsia-400  relative' > 
<img className=' mx-auto my-4 rounded-xl  w-[50%]' src='/Capture d’écran (55).png' alt=''></img>
   <h1 className=' my-10  text-center    max-sm:text-md font-serif lg:text-2xl  text-lg max-sm:text-sm '> restaurent web site</h1>
</div></Tilt>
<Tilt options={{ 
  reverse: false,  // Reverse the tilt direction
  max: 25,         // Maximum tilt rotation (degrees)
  perspective: 1000, // Perspective value
  scale: 1.1,      // Scale factor for the element during the tilt
  speed: 300,      // Tilt transition speed (milliseconds)
  transition: true, // Enable or disable tilt transition
  axis: null,      // Specify tilt axis (x, y, or null for both)
  reset: true,     // Reset tilt back to its initial state on mouseout
  easing: "cubic-bezier(.03,.98,.52,.99)"}} >
<div className=' workss ii border-4 rounded-full max-md:rounded-xl lg:rounded-3xl border-fuchsia-400  relative' > 
<img className=' mx-auto my-4 rounded-xl  w-[50%]' src='/Capture d’écran (68).png' alt=''></img>
   <h1 className=' my-5  text-center    max-sm:text-md font-serif lg:text-2xl  text-lg max-sm:text-sm '> hotel city web site</h1>
</div></Tilt>
    </div></div>
  )
}

export default Works