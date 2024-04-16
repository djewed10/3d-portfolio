import { useEffect } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(".djewed", { x: "-200%" }, { ScrollReveal: ".djewed", x: 0, duration: 2 });
  }, []);

  return (
    <section className={`relative w-full h-[200px] mx-auto`}>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`djewed ${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Djewed</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full stack web developer. I have strong knowledge in 3D visuals, user <br className='sm:block hidden' />
            interfaces, ecommerce sites, and web applications
          </p>
        </div>
      </div>

     
    </section>
  );
};

export default Hero;
