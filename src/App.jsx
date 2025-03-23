

import { useEffect, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import CartNav from './Components/CartNav/CartNav'


import Header from './Components/Header/Header'


function App() {

  const [cricketers, setCricketers] = useState([]);

  useEffect(() => {
    fetch("cricketers.json")
    .then(res => res.json())
    .then(data => setCricketers(data))
  },[])
  
  


  return (
    <>
    <div className='max-w-7xl mx-auto mt-10'>
      <Header ></Header>
      <Banner></Banner>
      <CartNav cricketers = {cricketers}></CartNav>
      


      

    </div>
    

    


      

    </>
  )
}

export default App
