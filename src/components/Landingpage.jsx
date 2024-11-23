import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function Landingpage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-[95vh] bg-[url("/images/bg8.png")] bg-cover bg-center pt-1'>
      <div className='flex'>
        <div className='textstructure mt-[19vw] px-20'>
          {["Hii🙌, This is", "developer", "biswaranjan sahoo"].map((item, index) =>{
          return ( 
            <div className='masker'>
              <div className='w-fit flex'>
                {index === 1 && (<motion.div initial={{width: 0}} animate={{width: "7.7vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='w-[7.7vw] h-[4vw] relative top-[1.5vw] rounded-md overflow-hidden'>
                 <img src='https://www.epitech-it.es/wp-content/uploads/2022/07/danial-igdery-FCHlYvR5gJI-unsplash-1536x864.jpg'></img></motion.div>)}
                <h1 className="uppercase text-[4.5vw] leading-[6.5vw] tracking-tight font-['Founders Grotesk X-Condensed'] font-bold">{item}</h1>
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
            className='pt-24 mt-[5vw] w-[38vw]'
          />
        </div>
      </div> 
    </div>
  )
}

export default Landingpage