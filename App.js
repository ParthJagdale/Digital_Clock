import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useState } from 'react';

function App() {

  const time = new Date().toLocaleTimeString();

const [ctime, setCtime] = useState(time);
const Update_time = ()=>
{
  
  const time = new Date().toLocaleTimeString();
  setCtime(time);

}

setInterval(Update_time,1000)

  return (
   
    <header className='background'>
      
      <>
      <h1> THIS IS THE BESST TIME YOU HAVE VISITED</h1>   

    <h2>{ctime} </h2>
   

      </>
      </header> 
    
  );
}

export default App;
