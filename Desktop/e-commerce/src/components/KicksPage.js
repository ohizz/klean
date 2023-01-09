import React from "react";
import { Link, useNavigate } from "react-router-dom";
import uuid from "react-uuid";
const KicksPage = ({id,name,brand,image,price,kicks}) => {
 return(
  <>
  <div className='shoe' >
  <div className='shoelist' key={uuid()}><span className='kickname'>{name}</span><span className='kickbrand'>{brand}</span></div>
  <Link to={`/id/${id}`}>
  <img src={image} alt='sneaker'/>
  </Link>
  <span className='price'>{price}</span>
  </div>
  </>
 )
}


export default KicksPage;