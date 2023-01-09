// import React, {createContext, useEffect, useState} from 'react';
// import axios from 'axios';

import { createContext } from "react";

// export const AppContext = createContext();


// export const AppProvider =({props})=>{
//  const [kicks, setKicks] = useState([]);
//  useEffect(() => {
//  axios.get(`https://apisneakers.herokuapp.com/sneakers`).then((response) => {
//  setKicks(response.data);
//  })
//  }, []);
//  return(
//   <AppContext.Provider value={kicks}>
//     {props}
//   </AppContext.Provider>
//  )
// }

const AppContext = createContext();
export default AppContext;