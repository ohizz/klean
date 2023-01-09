import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import  AppContext from '../context/contextApi';
import uuid from 'react-uuid';
import Header from './Header';
import Footer from './Footer';
const ShoePage = () => {
 const [count, setCount] = useState(0)
 const {kicks} = useContext(AppContext);
 const {id} = useParams();
 console.log({kicks});
 
 const incrementAdd = () =>{
 setCount(count + 1);
 if(count == 10) {setCount(1)}
 }

 const incrementMinus=()=>{
 setCount(count - 1);
 if(count == 0 ) {setCount(0)}
 }
 return(
<>
<Header/>
 <div className='payPage'>
 <div className='productShoe' key={uuid()}>
 <img className="kick" src={kicks[id].image}></img>
  <h2> {kicks[id].name}</h2>
  <p>{kicks[id].brand}</p>
 </div>
 <div className='pay'>
 <p className='sell'> <span>price</span> {kicks[id].price}</p>

 <div className='sect'><div className='size'>
 <p>size</p>
 <select>
    <option>size</option>
    <option>9</option>
    <option>10</option>
    <option>11</option>
    <option>12</option>
    <option>13</option>
    <option>14</option>
 </select>
 </div>
 <div className='quatity'>
    <p>quatity</p>
    <button onClick={incrementMinus}>-</button>
    <input type="text" value={count}></input>
    <button onClick={incrementAdd}>+</button>
 </div>
 </div>
 <button className='buy'>buy</button>
 </div>
 </div>
 <div className='word'>
  <p>Authentic</p>
    <p>From brand's factory to our warehouse</p>
    <p>Aftre delivery check for kick's stamp to check if it is original</p>
    <p>Every sneakers comes with a kick stamp</p>
    <p>we ship to anywhere in the world</p>
    <p>*choose size and quatity before checking out</p>
  </div>
 <div className='detail'>
  <h3>Product Detail</h3>
   <section>
    <span>condition  <small>New</small></span>
    <span>brand  <small>{kicks[id].brand}</small></span>
    <span>release date  <small>23 Nov 2021</small></span>
    <span>size  <small>8</small></span>
    <span>color <small>Black and White</small></span>

   </section>
 </div>
 <Footer/>
</>
 )
}

export default ShoePage;