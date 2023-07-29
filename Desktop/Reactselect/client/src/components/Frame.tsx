import React from "react";
import Home from "./Header";
import Banner from "./Banner";
import Testimony from "./Testimony";
import Whatwedo from "./Whatwedo";


const Frame = () => {
 return(
    <div className="bg-zinc-950 min-h-[100vh]">
    <Home/>
    <Banner/>
    <Whatwedo/>
    <Testimony/>
    </div>
 )
}

export default Frame