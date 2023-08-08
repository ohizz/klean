import React from 'react'
import { DiTechcrunch } from "react-icons/di";
import { DiYahoo } from "react-icons/di";
import {SiCnn} from "react-icons/si"

const Banner = () => {
 return( 
    <div className='mt-10 flex flex-wrap flex-row md:flex-row md:justify-between justify-center item-center max-w-[1100px] my-0 mx-auto'>
<div className='flex mb-14 lg:mb-0 flex-col text-center w-2/2 lg:w-1/2'>
        <h1 className='text-zinc-900 text-7xl  md:text-7xl leading-tighter pb-8 font-black'>
            Your <span className='text-blue-600'>cleaning service</span> for everything cleaning
        </h1>
        <button className=' w-[140px] bg-zinc-900 text-sm font-thin text-slate-200 rounded p-4 self-center'>Try it out now</button>
       
    </div>

<img src="https://abbyclean.com/wp-content/uploads/2022/09/Portrait-of-young-latin-man-sw-1-1200x800.jpg" className='object-cover h-[370px] w-[100%] lg:w-[500px] border md:rounded-lg' alt="cleaner"></img>
    </div>
    
 )
}

export default Banner