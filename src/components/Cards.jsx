import { motion } from 'framer-motion'
import React from 'react'

function Cards() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className='max-w-full h-screen bg-[url("/images/bg7.png")] bg-center bg-cover flex items-center px-28 gap-5'>
      <motion.div whileHover={{scale: 1.2}} transition={{duration: 0.3}} className='cardcontainer w-1/2 h-[50vh] overflow-hidden'>
        <div className='card w-full h-full rounded-xl bg-[#004D43] p-28 px-16'>
          <h1 className='text-5xl font-[Bauhaus 93] font-semibold'>Let's✌️</h1>
          <h1 className='text-5xl font-[Bauhaus 93] font-semibold'>Make😉</h1>
          <h1 className='text-5xl font-[Bauhaus 93] font-semibold'>Something great🤝</h1>
        </div>
      </motion.div>
      <div className='cardcontainer w-1/2 h-[50vh] flex gap-5'>
        <motion.div whileHover={{scale: 1.2}} transition={{duration: 0.3}} className='card w-1/2 h-full rounded-xl bg-[#13302c] px-12 py-28'>
          <h1 className='text-[45px] font-semibold font-[Bauhaus 93]'>Let's🙂‍↔️</h1>
          <div className='flex'>
            <h1 className='text-[45px] font-semibold font-[Bauhaus 93]'>Connect</h1>
            <h1 className='text-[45px]'>🫠</h1>
          </div>
        </motion.div>
        <motion.div whileHover={{scale: 1.2}} transition={{duration: 0.3}} className='card w-1/2 h-full rounded-xl bg-[#13302c] py-36 px-5 pr-20'>
          <div className='flex overflow-hidden'>
            <h1 className='text-[20px]'>📧</h1>
            <h1 className='text-[20px] font-semibold'>biswaranjan4864@gmail.com</h1></div>
          <h1 className='text-[20px] font-semibold'>☎️+91 94392 03705</h1>
        </motion.div>
      </div>
    </div>
  )
}

export default Cards