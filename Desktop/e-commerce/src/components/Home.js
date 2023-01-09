import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import Pop from './Pop';
import Shoes from './Shoes';
import Header from './Header';
import axios from 'axios';
import AppProvider from '../context/contextApi';

const Home = () => {
 return(
  <>
    <Header/>
    <Pop/>
    <Shoes/>
    <Footer/>
  </>
 )
}

export default Home;