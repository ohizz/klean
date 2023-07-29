import React from "react";

const Header = () => {
 return(
    <div className=" flex justify-between items-center border-b border-zinc-700 pt-8 pb-4 px-10">
<h1 className="text-slate-50 text-2xl font-semibold tracking-tight">klean.</h1>
<a href="tel:123-456-7890" className="text-zinc-100 border border-zinc-600 p-2 rounded">Book a service</a>
    </div>
 )
}

export default Header