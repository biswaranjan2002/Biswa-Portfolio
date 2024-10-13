import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function Landingpage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-[90vh] bg-zinc-900 pt-1'>
      <div className='flex'>
        <div className='textstructure mt-60 px-20'>
          {["Hii, This is", "web-developer", "biswarajan sahoo"].map((item, index) =>{
          return ( 
            <div className='masker'>
              <div className='w-fit flex'>
                {index === 1 && (<motion.div initial={{width: 0}} animate={{width: "7.7vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='w-[7.7vw] h-[4.5vw] relative top-[1vw] rounded-md overflow-hidden'>
                 <img src='https://www.epitech-it.es/wp-content/uploads/2022/07/danial-igdery-FCHlYvR5gJI-unsplash-1536x864.jpg'></img></motion.div>)}
                <h1 className="uppercase text-[5.2vw] leading-[5.75vw] tracking-tighter font-['Founders Grotesk X-Condensed'] font-bold">{item}</h1>
              </div>
            </div>
            );
          })}
        </div>
        <div>
          <motion.img
            initial={{y: 0}}
            animate={{ y: [0, -20, 0] }}  // Move image up and down
            transition={{
            duration: 2.5, repeat: Infinity, repeatType: "loop",  
            ease: "easeInOut"}}
            src='./images/pro.png'
            className='pt-24 w-[40vw]'
          />
        </div>
      </div> 
      <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
        {["For Companies and Individuals", "From the first HTML file to Personel Portfolio"].map((item, index)=>(<p className='text-md font-light tracking-tight leading-none'>{item}</p>
        ))}
        <div className='start flex items-center gap-2'>
          <div className='px-5 py-2 border-[1px] font-light text-md border-zinc-400 rounded-full uppercase'>Let's get started</div>
          <div className='w-10 h-10 border-[1px] flex items-center justify-center font-light text-sm border-zinc-400 rounded-full'>
            <span className='rotate-[180deg]'>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landingpage