

import { useEffect, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import CartNav from './Components/CartNav/CartNav'


import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Newsletter from './Components/Newsletter/Newsletter'


function App() {

  const [cricketers, setCricketers] = useState([]);
  const [freeCoin, setFreeCoin] = useState(0);

  useEffect(() => {
    fetch("cricketers.json")
      .then(res => res.json())
      .then(data => setCricketers(data))
  }, [])


  

  const handleCoin = () => {
    const newFreeCoin = freeCoin + 6500000;
    setFreeCoin(newFreeCoin);
    

  }
  console.log(freeCoin);




  return (
    <>
      <div >
        <div className='max-w-7xl mx-auto  '>
          <div className='fixed bg-white w-full py-10  z-1'>
            <Header freeCoin={freeCoin} ></Header>
          </div>
          <Banner handleCoin={handleCoin} freeCoin={freeCoin}></Banner>
          <CartNav cricketers={cricketers}></CartNav>
          <div className='relative'>
            <Newsletter></Newsletter>
          </div>
        </div>


        <Footer></Footer>






      </div>







    </>
  )
}

export default App
