import React from 'react'
import {MdOutlineCleaningServices, MdOutlinePriceCheck} from 'react-icons/md'
import {GiVacuumCleaner} from 'react-icons/gi'
import {GiSparkles} from 'react-icons/gi'
import {PiTreeEvergreenLight} from 'react-icons/pi'
const Whatwedo = () => {
 return( 
    <div>
   <div className='bg-zinc-100 text-zinc-900 flex justify-center items-center'>
    <div className='py-10 px-6 mb-16 w-1/2'>
    <h4 className='text-xl  font-bold tracking-tighter uppercase text-left'>Why book with us?</h4>
    <p className='pt-6 text-[16px] tracking-tighter'>we provide online booking, lightning fast customer service and fantastic organic cleaning. We want to WOW you with outstanding customer service, ecologically sustainable quality cleaning products, noc ontractual obligations, pricing that beats the competitor and a 200% guarantee every time!</p>
    </div>
<div className='flex  flex-row gap-x-4 w-2/6  gap-8 flex-wrap'>
<div className='w-2/4 flex flex-col'>
        <p>simple flat rate</p>
        <MdOutlinePriceCheck/>
    </div>

    <div className='flex item-center justify-center flex-col'>
        <p>green eco-friendly cleaning</p>
        <PiTreeEvergreenLight/>
    </div>

    <div className='flex item-center justify-center flex-col'>
        <p>simple flat rate</p>
        <MdOutlinePriceCheck/>
    </div>

    <div className='flex item-center justify-center flex-col'>
        <p>simple flat rate</p>
        <MdOutlinePriceCheck/>
    </div>
</div>
</div>
    <div className='md:max-w-[1000px] my-0 mx-auto flex flex-col gap-y-10 md:flex-row  lg:justify-center items-center'>
    <div className='flex md:justify-center items-center'>
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

<div className='flex md:justify-center items-center'>
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

<div className='flex md:justify-center items-center'>
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