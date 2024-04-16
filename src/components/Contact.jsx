import React from 'react';
import EarthCanvas from './canvas/Earth';
import { styles } from '../styles';

const Contact = () => {
  return (
    <div id='contact' className='' >
      <h2 className={`${styles.sectionHeadText} text-center my-40`} id="works">
          contact:
        </h2>
        <div className='container mx-auto my-40 p-4 border-4 w-[40%] max-md:w-[90%]    items-cente ' >
      <div className='mb-4 my-[10vw]  text-center ' >
        <p className='text-gray-700 text-[2vw] max-md:text-[3vw] font-bold grow'>Name: chaalal djewed</p>
      </div>
      <div className='mb-4 my-[10vw] text-center'>
        <p className='text-gray-700 text-[2vw] max-md:text-[3vw] font-bold grow'>Email: djewedchaalal@gmail.com</p>
      </div>
      <div className='mb-4 relative my-[10vw]  text-center'>
        <p className='text-gray-700 text-[2vw] max-md:text-[3vw] font-bold  grow'>GitHub: https://github.com/djewed10</p>
      </div>
      <div className='mb-4 my-[10vw] text-center'>
        <p className='text-gray-700 text-[2vw] max-md:text-[3vw] font-bold grow'>Address: Oran, Algeria</p>
      </div>
      <div className='mb-4 my-[10vw] text-center'>
        <p className='text-gray-700 text-[2vw] max-md:text-[3vw] font-bold grow'>Phone: 0791046445</p>
      </div>
      
    </div><p className=" mx-auto w-60 font-light text-xs">hold down the earth and move it </p>
        <EarthCanvas  />
        
   </div>
  );
};

export default Contact;
