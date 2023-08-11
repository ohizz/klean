import React from 'react'
import { DiTechcrunch } from "react-icons/di";
import { DiYahoo } from "react-icons/di";
import {SiCnn} from "react-icons/si"

const Banner = () => {
 return( 
    <div className='mt-10 flex flex-wrap flex-row md:flex-row md:justify-between justify-center item-center max-w-[1100px] my-0 mx-auto'>
<div className='flex mb-14 mx-10 md:mx-0 lg:mb-0 flex-col text-center md:text-left w-2/2 md:w-[40%]'>
        <h1 className='text-zinc-900 text-4xl md:text-6xl leading-tight lg:leading-tight pb-8 lg:font-black'>
            Your <span className='text-blue-600'>cleaning service</span> for everything cleaning
        </h1>
        <button className='w-full md:w-2/4 bg-zinc-900 text-sm font-thin text-slate-200 rounded p-4 self-center md:self-stretch'>Try it out now</button>
       
    </div>

<img src="https://abbyclean.com/wp-content/uploads/2022/09/Portrait-of-young-latin-man-sw-1-1200x800.jpg" className='object-cover h-[370px] w-[100%] md:w-[40%] border md:rounded-lg' alt="cleaner"></img>
    </div>
    
 )
}

export default Banner