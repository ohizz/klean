import React, {useState, useEffect} from "react";
import {RxDotFilled} from "react-icons/rx"

const testimonials = [
    {
        name: 'Rachaal Mensah',
        title: 'Lash Engineer',
        image: 'https://images.pexels.com/photos/3783870/pexels-photo-3783870.jpeg',
        quote: 'Klean service is one of the best in Nigeria. Their janitors make sure that every nook and cranny is wipe, clean and arrange before leave the residential of work'
    },
    {
        name: 'Elizabeth Oxford',
        title: 'Fashion Designer',
        image: 'https://images.pexels.com/photos/3818903/pexels-photo-3818903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        quote: 'Klean service is one of the best in Nigeria. Their janitors make sure that every nook and cranny is wipe, clean and arrange before leave the residential of work'
    },
    {
        name: 'AnneMarie Sauze',
        title: 'Barrister',
        image: 'https://images.pexels.com/photos/6612691/pexels-photo-6612691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        quote: 'Klean servicntial of work'
    },

]
const Testimony = () => {
const [currentIndex, setCurrentIndex] = useState<any>(0)
const [pause, setPause] = useState<boolean>(false)
const goToSlide = (Index:number) => {
    setCurrentIndex(Index)
}
    
useEffect(() => {
//  setInterval(() => {
//     const isLastSlide = currentIndex === testimonials.length - 1;
//     const newSlide = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newSlide)
//  }, 3000)
})
 return(
//     <div className="bg-zinc-50 mt-20 flex flex-col md:flex-row justify-end item-center gap-x-6 duration-600 ease-in-out">
//         <div className="duration-500 flex flex-col justify-center items-center w-1/2">
//             <p className="text-3xl text-slate-600 font-semibold text-zinc-950 text-center w-[600px] pl-10 leading-snug">{testimonials[currentIndex].quote}</p>

//             <h3 className="text-zinc-800 text-2xl font-bold pt-10">AnneMarie Suaze</h3>
//             <div className="flex py-2 text-2xl">
//     {testimonials.map((slide, Index) => (
//       <div onClick={() => goToSlide(Index)}>
//         <RxDotFilled/>
//       </div>
//     ))}
// </div>
//         </div>
// <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-1/2 bg-cover bg-center transition duration-700"/>
// </div>
<div className="">
 <div className="py-10 md:py-0 md:ml-16 duration-700 ease-in-out">
   {testimonials.map((slide, index) => {
     return (
        <div key={index}
        className={index === currentIndex ? "flex flex-wrap md:flex-nowrap gap-x-12 flex" : "hidden"}>
        <p className="p-6 text-zinc-600 tracking-tighter font-bold text-2xl md:text-3xl  flex justify-center flex-col text-center md:w-2/5">{slide.quote}</p>
      <img src={slide.image} alt="This is a carousel slide" className="md:w-3/5 object-cover"
 />
 </div>
 );
  })}  
 </div>
  </div>
)
}

export default Testimony