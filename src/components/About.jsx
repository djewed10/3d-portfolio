import React, { useEffect } from 'react'
import {Tilt} from "react-tilt"
import { styles } from '../styles'
import gsap from 'gsap'

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
const About = () => {
  useEffect(()=>{
    gsap.fromTo(".aa",{x:"-700%",},{scrollTrigger:{trigger:".aa",toggleActions:"restart none none none"},x:0, stagger:.6, duration:2})
    gsap.fromTo(".over",{x:"-200%",},{scrollTrigger:{trigger:".over",toggleActions:"restart none none none"},x:0, duration:2})
  },[])
  return (
    <div id='about' className=' mount mx-auto w-[1100px] mb-20  justify-center flex flex-wrap gap-20 '>
      <h1 className={` over ${styles.sectionHeadText} mt-10 mx-auto text-center`}>overview :</h1>
      <p className=' '>
      I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </p>
      <Tilt   options={{
          max: 50,
          scale: 1,
          speed: 450,
        }}>
      <div className=' aa  mx-auto bg-gray-400 border-4 relative workss   border-fuchsia-500     rounded-xl w-52      h-52 text-black '><img className=' absolute left-14 top-4 rounded-full w-20 h-20 ' src='https://images.prismic.io/turing/652ec64dfbd9a45bcec819ff_Web_Development_Challenges_1a55626dcc.webp?auto=format,compress' alt=''></img>
      <p className=' font-bold text-md absolute bottom-8 left-7 '>web devlopement</p></div>
      </Tilt>
      <Tilt  options={{
          max: 50,
          scale: 1,
          speed: 450,
        }}>
      <div className=' aa mx-auto bg-gray-400 border-4 relative workss  border-fuchsia-500     rounded-xl w-52      h-52 text-black '><img className=' absolute left-14 top-4 rounded-full w-20 h-20 ' src='https://codedamn.com/assets/images/learnpaths/og/frontend.png' alt=''></img>
      <p className=' font-bold text-md absolute bottom-8 left-14 '>front end </p></div>
      </Tilt>
      <Tilt  options={{
          max: 50,
          scale: 1,
          speed: 450,
        }}>
      <div className=' aa mx-auto bg-gray-400 border-4 relative  workss  border-fuchsia-500     rounded-xl w-52      h-52 text-black '><img className=' absolute left-14 top-4 rounded-full w-20 h-20 ' src='https://t4.ftcdn.net/jpg/02/99/62/11/360_F_299621124_vutDKbNwRJG6poJRQQIMYfsc4tJCTO5E.jpg' alt=''></img>
      <p className=' font-bold text-md absolute bottom-8 left-14 '>back end</p></div>
      </Tilt>
      <Tilt  options={{
          max: 50,
          scale: 1,
          speed: 450,
        }}>
      <div className=' aa mx-auto bg-gray-400 border-4 relative  workss  border-fuchsia-500     rounded-xl w-52      h-52 text-black '><img className=' absolute left-14 top-4 rounded-full w-20 h-20 ' src='https://grotechminds.com/wp-content/uploads/2023/11/An-overview-of-MERN-Stack-Development-1-1279x719.png' alt=''></img>
      <p className=' font-bold text-md absolute bottom-8 left-14 '>mern stack</p></div>
      </Tilt>
    </div>
  )
}

export default About