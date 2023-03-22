import React, {useEffect, useStae, useState} from 'react';
import axios from 'axios';
import './App.css';
import DataHub from './components/DataHub';
import Header from './components/Header';

const App =() => {
  const [data, setData] = useState([])

  useEffect(() => {
   axios.get(`https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b`).then((response) => {
   setData(response.data.data);
   console.log(data)
   })
   },[]);
   console.log(data)
  return (
    <div className="App">
      <Header/>
      <div className='cardOverallBackground'>
        <div className='cardHeading'>
        <p className='feature'>Feature Items</p>
        <button>View Action</button>
        </div>
        <div className='cardBackground'>
        {data.map(data => (
      <DataHub name={data.name} title={data.title} image={data.image} bid={data.bid}/>
     ))}
        </div>
    </div>
    </div>
  );
}

export default App;
