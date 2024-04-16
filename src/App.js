import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, ComputersCanvas } from "./components";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center h-[170vh]' id="home">
          <Navbar />
          <Hero />
          <ComputersCanvas  />
          <p className="  relative bottom-[-50%] z-50 mx-auto w-60 font-light text-xs">hold down the computer and move it</p>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
         {/* Place ComputersCanvas here */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
