import React, { useEffect, useState } from 'react'

function Eyes2() {

  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) ;
      setRotate(angle-180);
    });
  });

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".5" className='eyes w-full h-screen overflow-hidden'>
      <div className='relative w-full h-full bg-cover bg-center rounded-3xl bg-[url("./images/back1.png")]'>
          <div className='text-6xl py-[70vh] flex items-center justify-center'>
            <h1 className='font-["Founders Grotesk X-Condensed"] font-extrabold tracking-wider'>Let's Start This Wonderful Journey...😊🫰</h1>
          </div>
          <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
            <div className='w-[15vw] flex items-center justify-center rounded-full h-[15vw] bg-zinc-100'>
              <div className='w-2/3 h-2/3 rounded-full relative bg-zinc-900'>
                <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-10'>
                  <div className='w-10 h-10 rounded-full  bg-zinc-100'></div>
                </div>
                
              </div>
            </div>
            <div className='flex items-center justify-center w-[15vw] rounded-full h-[15vw] bg-zinc-100'>
              <div className='w-2/3 h-2/3 rounded-full relative bg-zinc-900'>
                <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                  <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                </div>
            </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Eyes2