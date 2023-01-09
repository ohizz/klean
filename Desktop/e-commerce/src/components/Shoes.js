import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import KicksPage from './KicksPage';
import AppContext from '../context/contextApi';
import uuid from 'react-uuid';

const Shoes = () => {
 const {kicks} = useContext(AppContext);
 return(
<div className='sneakers'>
 {kicks.map(kick => (
 <KicksPage key={uuid()} id={kick.id} name={kick.name} brand={kick.brand} image={kick.image} price={kick.price}/>
 
 ))}
</div>
)
 }
export default Shoes