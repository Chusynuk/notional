import { Fragment } from "react";
import React from "react";




export default function HeroComponent(){

    return(
        
      <div className=" h-fit ">
      <div className=" flex justify-center items-center p-5">
      <h1 className=" text-[13vw] text-center md:text-[100px] leading-1 select-none tracking-tightest font-extrabold">
  <span data-content="Create Bounties." className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-[#0f1624] before:animate-gradient-background-1">
    <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1"> Create Bounties.</span>
  </span>
  <span data-content="Resolve Bounties." className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-[#0f1521] before:animate-gradient-background-2">
    <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2">Resolve Bounties.</span>
  </span>
  <span data-content="Get Paid." className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-[#0e1420] before:animate-gradient-background-3">
    <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3">Get Paid.</span>
  </span>
</h1>


      </div>   
  </div>
  
   )
}