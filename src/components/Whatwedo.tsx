import React from "react";

const Whatwedo = () => {
 return(
    <div className=" mt-10 px-8 ">
        <div className=" flex flex-wrap md:flex-nowrap justify-between item-center flex-col md:flex-row">
                <img src="https://hellamaid.ca/wp-content/uploads/2023/02/3-5.jpg" className="object-cover h-[250px] md:h-[450px] w-[100%] md:w-[45%] rounded-lg"/>
            
        <div className="flex justify-center item-center flex-col  w-2/2 md:w-[45%]">
        <h1 className="font-semibold text-3xl py-4">residential service</h1>
        <p className="font-sans text-md leading-normal">let us help you with your residential cleaning, we do thorogh cleaning of your house. your toilet, kitchen, bedroom, bathroom, living room, atorgae room, guest room and pantry</p>
        </div>
        </div>
        <div className="mt-10 flex flex-wrap md:flex-nowrap justify-between item-center flex-col md:flex-row">
        <img className="order-[2] object-cover h-[250px] md:h-[450px] w-[100%] md:w-[45%] rounded-lg" src="https://www.thaicleaningservice.com/wp-content/uploads/2018/03/cleanliness-2799464_640.jpg"/>
        <div className="flex justify-center item-center flex-col  w-2/2 md:w-[45%]">
            <h1 className="font-semibold text-3xl py-4">commercial and office service</h1>
            <p className="font-sans text-md leading-normal"></p>
            </div>
        </div>
        </div>
    
 )
}

export default Whatwedo