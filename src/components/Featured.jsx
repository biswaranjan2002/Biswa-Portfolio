import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  
  const cards  = [useAnimation(), useAnimation()]
  const handleHover =(index)=>{
    cards[index].start({y:"0%"})
  }
  const handleHoverEnd =(index)=>{
    cards[index].start({y:"100%"})
  }
  const cards2  = [useAnimation(), useAnimation()]
  const handleHover2 =(index)=>{
    cards2[index].start({y:"0"})
  }
  const handleHoverEnd2 =(index)=>{
    cards2[index].start({y:"100%"})
  }

  const handleClick = () => {
    window.open('https://cakebuffet.netlify.app/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className="w-full py-10">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-[60px] font-semibold font-["Neue Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10 ">
            <motion.div onClick={handleClick} onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className="cardcontainer relative w-1/2 h-[70vh]">
              <h1 className="absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-6xl tracking-tight leading-none font-['Founders Grotesk X-Condensed'] font-bold">{"CAKESHOP_HOME_PAGE".split('').map((item, index)=>(
                <motion.span initial={{y: "100%"}} animate={cards[0]} transition={{ease: [0.22, 1,0.36,1], delay:index*0.01}} className="inline-block">{item}</motion.span>))}</h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <motion.img whileHover={{scale: 0.9}} transition={{duration: 0.3}} className="w-full h-full bg-cover" src="/images/p1.png" alt=""></motion.img>
              </div>
            </motion.div>
            <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)} className="cardcontainer relative w-1/2 h-[70vh]">
              <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-6xl tracking-tight leading-none font-['Founders Grotesk X-Condensed'] font-bold">{"SIMPLE_SOCIAL_MEDIA_APP".split('').map((item, index)=>
              <motion.span initial={{y: "100%"}} animate={cards[1]} transition={{ease: [0.22, 1,0.36,1], delay:index*0.01}} className="inline-block">{item}</motion.span>)}</h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <motion.img whileHover={{scale: 0.9}} transition={{duration: 0.3}} className="w-full h-full bg-cover rounded-xl border-[2px] border-zinc-600" src="/images/p2.png" alt=""></motion.img>
              </div>
            </motion.div>
        </div>
        <div className="cards2 w-full flex gap-10 mt-10 ">
            <motion.div onHoverStart={() => handleHover2(0)} onHoverEnd={() => handleHoverEnd2(0)} className="cardcontainer relative w-1/2 h-[70vh]">
              <h1 className="absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-6xl tracking-tight leading-none font-['Founders Grotesk X-Condensed'] font-bold">{"HOSTEL_GREIVANCE_PAGE".split('').map((item, index)=><motion.span initial={{y: "100%"}} animate={cards2[0]} transition={{ease: [0.22, 1,0.36,1], delay:index*0.02}}  className="inline-block">{item}</motion.span>)}</h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <motion.img whileHover={{scale:0.9}} transition={{duration:0.3}} className="w-full h-full bg-cover" src="/images/p3.png" alt=""></motion.img>
              </div>
            </motion.div>
            <motion.div onHoverStart={() => handleHover2(1)} onHoverEnd={() => handleHoverEnd2(1)} className="cardcontainer relative w-1/2 h-[70vh]">
              <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-6xl tracking-tight leading-none font-['Founders Grotesk X-Condensed'] font-bold">{"FIRST_HTML_CSS_PROJECT".split('').map((item, index)=><motion.span initial={{y: "100%"}} animate={cards2[1]} transition={{ease: [0.22, 1,0.36,1], delay:index*0.02}} className="inline-block">{item}</motion.span>)}</h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <motion.img whileHover={{scale:0.9}} transition={{duration:0.3}} className="w-full h-full bg-cover" src="/images/p4.png" alt=""></motion.img>
              </div>
            </motion.div>
        </div>
      </div>
      <div className="border-[1px] border-zinc-700 mt-24"></div>
    </div>
  );
}

export default Featured;
