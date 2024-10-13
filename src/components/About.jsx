import React from "react";

function About() {

  return (
    <div className="w-full p-20 -mt-9 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className='font-["Neue Montreal"] text-[4vw] leading-[4.2vw] tracking-tight'>
        Web developers transform creativity into reality, blending code and
        design to craft interactive digital experiences. Their innovation meets
        functionality, turning ideas into dynamic platforms that shape the
        online world.
      </h1>

      <div className="flex gap-5 w-full border-t-[1px] pt-10 mt-10 border-[#a7ba62]">
        <div className="w-1/2">
          <h1 className="text-6xl">Our Approach:</h1>
          <button className="flex uppercase gap-10 items-center px-10 py-4 mt-10 bg-zinc-900 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl">
          <img
            className="rounded-3xl shadow-2xl"
            src="https://sourcebae.com/blog/wp-content/uploads/2023/09/web-developer-coding-computer-language.jpg"
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default About;
