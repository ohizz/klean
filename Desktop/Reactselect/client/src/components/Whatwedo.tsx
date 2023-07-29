import React from 'react'
import {MdOutlineCleaningServices} from 'react-icons/md'
import {GiVacuumCleaner} from 'react-icons/gi'
import {GiSparkles} from 'react-icons/gi'
const Whatwedo = () => {
 return( 
   <div className='bg-zinc-100 text-zinc-900 py-16'>
    <div className='max-w-[900px] my-0 mx-auto  py-10 px-6 mb-16'>
    <h4 className='text-xl font-bold tracking-tighter uppercase text-center'>The complete cleaning stack for every home, business and community</h4>
    <p className='text-[16px] my-4 text-center font-medium tracking-tighter'>Our cleaning services helps your community with a sanity environment and hygiengy. we help people of all type save time and resource with a easy cleaning service that work</p>
    </div>
    <div className='md:max-w-[1000px] my-0 mx-auto flex flex-col gap-y-10 md:flex-row  lg:justify-center items-center'>
    <div className='flex justify-center items-center'>
    <span className='py-2 px-8'>
        <div className='text-2xl'>
        <MdOutlineCleaningServices/>
        </div>
    </span>
    <div className='w-1/2'>
    <h3 className='text-md font-bold text-zinc-600 '>Arrangement</h3>
    <p>Open a commercial-grade current account from anywhere in 10 minutes</p>
    </div>
</div>

<div className='flex justify-center items-center'>
    <span className='py-2 px-8'>
        <div className='text-2xl'>
        <GiVacuumCleaner/>
        </div>
    </span>
    <div className='w-1/2'>
    <h3 className='text-md font-bold text-zinc-600 '>Cleanness</h3>
    <p>Open a commercial-grade current account from anywhere in 10 minutes</p>
    </div>
</div>

<div className='flex justify-center items-center'>
    <span className='py-2 px-8'>
        <div className='text-2xl'>
        <GiSparkles/>
        </div>
    </span>
    <div className='w-1/2'>
    <h3 className='text-md font-bold text-zinc-600 '>Orderliness</h3>
    <p>Open a commercial-grade current account from anywhere in 10 minutes</p>
    </div>
</div>
    </div>

   </div>
 )
}

export default Whatwedo