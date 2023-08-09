import React from "react";

const Header = () => {
 return(
    <div className=" flex justify-between items-center border-b border-zinc-200 pt-6 pb-4 px-4">
<h1 className="text-blue-600 text-2xl font-black tracking-tight">klean.</h1>
<a href="tel:123-456-7890" className="text-zinc-100 text-xs bg-zinc-900 border p-3 rounded-full ">Book a service</a>
    </div>
 )
}

export default Header