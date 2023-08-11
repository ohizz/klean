import React from "react";
import Home from "./Header";
import Banner from "./Banner";
import Whatwedo from "./Whatwedo"
import Why from "./Why";



const Frame = () => {
 return(
   <div className="max-w-[1200px] min-h-[100vh] my-0 mx-auto">
<div className="font-luck">
    <Home/>
    <Banner/>
    <Why/>
<Whatwedo/>
    </div>
   </div>
 )
}

export default Frame