import React from 'react'
import { DiTechcrunch } from "react-icons/di";
import { DiYahoo } from "react-icons/di";
import {SiCnn} from "react-icons/si"

const Banner = () => {
 return( 
    <div className='mt-20 px-20 md:px-[5%] flex flex-col md:flex-row justify-center item-center '>
<div className='flex md:block justify-center items-center flex-col'>
        <h1 className='text-center md:text-left text-zinc-100 font-bold md:w-5/6 text-4xl md:text-6xl leading-tight'>
            The way to own a Klean house
        </h1>
        <p className='py-8 text-zinc-600 text-sm text-center md:text-left md:w-3/4'>make your house, office and your surrounding sparkingly neat with our service. with just one click away, a kleaner will be at your doorstep
      make your house, office and your surrounding sparkingly neat with our service. with just one click away, a kleaner will be at your doorstep</p>
        <button className='bg-zinc-100 text-sm text-zinc-900 rounded p-4 md:w-1/3 '>Try it out now</button>
        <div className='flex gap-x-4 items-center'>
            <p className='text-zinc-300 text-4xl md:text-8xl flex items-center'><DiTechcrunch/> <span className='text-sm md:text-2xl  text-zinc-300 font-bold'>Tech crunch</span></p>
            <p className='text-zinc-300 text-4xl md:text-8xl'><DiYahoo/></p>
            <p className='text-zinc-300 text-4xl md:text-8xl'><SiCnn/></p>

        </div>
    </div>
    <div className='relative'>
<img src="https://images.pexels.com/photos/6195950/pexels-photo-6195950.jpeg?auto=compress&cs=tinysrgb&w=400" className='border border-zinc-950 rounded w-full md:w-[1000px]' alt="cleaner"></img>
<div className='bg-zinc-950 absolute h-[15vh] bottom-0 z-99 w-full'>hhhh</div>
    </div>
    </div>
 )
}

export default Banner