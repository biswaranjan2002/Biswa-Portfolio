import { motion } from 'framer-motion'
import React from "react";

function Marquee() { 
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-28 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap">
        <motion.h1 initial={{x: "0"}} animate={{x:"-100%"}} transition={{repeat: Infinity,ease: 'linear', duration: 10}} className='pr-20 text-[18vw] leading-none font-["Founders Grotesk X-Condensed"] -mt-[2vw] font-bold uppercase '>
          I am a Developer
        </motion.h1>
        <motion.h1 initial={{x: "0"}} animate={{x:"-100%"}} transition={{repeat: Infinity,ease: 'linear', duration: 10}} className='pr-20 text-[18vw] leading-none font-["Founders Grotesk X-Condensed"] -mt-[2vw] font-bold uppercase '>
          I am a Developer
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
