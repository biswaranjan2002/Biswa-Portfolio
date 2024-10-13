import React from 'react';
import Navbar from './components/navbar';
import Landingpage from './components/Landingpage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Eyes2 from './components/Eyes2';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';




function App() {
  
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar></Navbar>
      <Landingpage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Eyes2 />
      <Footer />
    </div>
  )
}

export default App