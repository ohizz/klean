import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Pop from './components/Pop';
import Shoes from './components/Shoes';
import Demo from './components/Demo';
import Footer from './components/Footer';
import { Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import ShoePage from './components/ShoePage';
import AppProvider from './context/contextApi';
import axios from 'axios';
import {useState, useEffect} from 'react';
function App() {
 const [kicks, setKicks] = useState([]);
 useEffect(() => {
 axios.get(`https://sneakersapi-production.up.railway.app/sneakers`).then((response) => {
 setKicks(response.data);
 })
 },[]);

 return (
<>
<AppProvider.Provider value={{kicks}}>
 <Routes>
  <Route path='/demo' element={<Demo/>}/>
  <Route path='/' element={<Home/>}/>
  <Route path='/id/:id/' element={<ShoePage/>}/>
 </Routes>
 </AppProvider.Provider>
</>
 );
}

export default App;
