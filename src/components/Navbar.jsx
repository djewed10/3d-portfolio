import React, { useRef, useState } from 'react'
import {  menu, close } from "../assets";

const Navbar = () => {
  const [active,setactive]=useState("")
  const [toggle,setToggle]=useState(false)
  return (
    <nav className=' flex justify-between w-full  h-[300px] '><div>
<img src="/logo.svg" className='relative w-28 rounded-full max-sm:w-20 top-[-0px] left-[-0px] ' alt=''></img></div>
<ul className='flex font-bold max-md:hidden  gap-10 mt-10 mr-[50px]'>
  <li onClick={()=>{setactive("works")}}  className={` hover:text-gray-500 ${active==="works"?" text-gray-500":" "} `}><a href="#works">works</a></li>
  <li onClick={()=>{setactive("about")}}  className={` hover:text-gray-500 ${active==="about"?" text-gray-500":" "} `}><a href="#about" >about</a></li>
  <li onClick={()=>{setactive("contact")}}  className={` hover:text-gray-500 ${active==="contact"?" text-gray-500":" "} `}><a href="#contact" >contact</a></li>
</ul>
<div className='md:hidden flex flex-1 justify-end items-center'>
     
          <ul className={`${toggle?"":"hidden"} flex font-bold w-20 h-44 rounded-xl items-center justify-center flex-wrap bg-gray-700 gap-10 mt-10 mr-[50px]`}>
  <li onClick={()=>{setactive("works")}}  className={` hover:text-gray-500 ${active==="works"?" text-gray-500":" "} `}><a href="#works">works</a></li>
  <li onClick={()=>{setactive("about")}}  className={` hover:text-gray-500 ${active==="about"?" text-gray-500":" "} `}><a href="#about" >about</a></li>
  <li onClick={()=>{setactive("contact")}}  className={` hover:text-gray-500 ${active==="contact"?" text-gray-500":" "} `}><a href="#contact" >contact</a></li>
</ul>     <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] relative top-[-110px] left-[-30px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
</div>

    </nav>
  )
}

export default Navbar