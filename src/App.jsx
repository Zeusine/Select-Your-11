

import { useEffect, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import CartNav from './Components/CartNav/CartNav'


import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Newsletter from './Components/Newsletter/Newsletter'
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const notifyMoreThan6Players = () => toast.warn('Cannot Add More Than 6 Players', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",

  });

  const notifyPlayerAlreadyAdded = () => toast.error('Player Already Added', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",

  });

  const notifyNotEoughMoney = () => toast.error('Balance Insufficient', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",

  });

  const [cricketers, setCricketers] = useState([]);
  const [freeCoin, setFreeCoin] = useState(0);
  const [chosenCricketers, setChosenCricketers] = useState([]);

  useEffect(() => {
    fetch("cricketers.json")
      .then(res => res.json())
      .then(data => setCricketers(data))
  }, [])




  const handleCoin = () => {
    const newFreeCoin = freeCoin + 6500000;
    setFreeCoin(newFreeCoin);


  }
  const handleChosenPlayers = (chosenCricketersObjectComingOneBYOne) => {
    if (chosenCricketers.length < 6) {
      if (chosenCricketers.includes(chosenCricketersObjectComingOneBYOne) == true) {

        notifyPlayerAlreadyAdded();

      }
      else {
        if (chosenCricketersObjectComingOneBYOne.price < freeCoin) {
          const newFreeCoin = freeCoin - chosenCricketersObjectComingOneBYOne.price;
          setFreeCoin(newFreeCoin);
          const newChosenCricketers = [...chosenCricketers, chosenCricketersObjectComingOneBYOne];
          setChosenCricketers(newChosenCricketers);

        }
        else{
          notifyNotEoughMoney();
        }

      }


    }

    else {
      notifyMoreThan6Players();
    }

  }

  const handleRemove = (idx) => {
    const newChosenCricketers = chosenCricketers.filter((_, index) => index != idx);
    setChosenCricketers(newChosenCricketers)

  }






  return (
    <>
      <div >
        <div className='max-w-7xl mx-auto  '>
          <div className='fixed bg-white w-full py-10  z-1'>
            <Header freeCoin={freeCoin} ></Header>
          </div>
          <Banner handleCoin={handleCoin} freeCoin={freeCoin}></Banner>
          <CartNav cricketers={cricketers} handleChosenPlayers={handleChosenPlayers} chosenCricketers={chosenCricketers} handleRemove={handleRemove}></CartNav>
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
