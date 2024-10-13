import React from "react";

function Footer() {
  return (
    <div className='w-full h-1/2 flex gap-8 bg-zinc-900 font-["Founders Grotesk X-Condensed"]'>
      <div className='w-1/2 h-full flex flex-col justify-between py-10 p-20'>
        <div className="headings ">
          <h1 className="text-[5.5vw] leading-none font-semibold">Hey<br></br>Let's Gooooo</h1>
        </div>
        <img
            src="./images/bslogo.png"
            className="w-28 h-28 -ml-4"
          />
      </div>
      <div className="w-1/2 py-9">
        <h1 className="text-[5.5vw] leading-none font-semibold">And Develop<br></br>Something</h1>
        <div className="mt-10">
          <a className="block text-2xl font-light" href="https://www.instagram.com/_.biswaranjan.__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</a>
          <a className="block text-2xl font-light" href="www.linkedin.com/in/biswaranjan-sahoo3705">LinkedIn</a>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
