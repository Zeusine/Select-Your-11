import React from 'react';
import logo from "../../assets/logo.png"
import { BsCoin } from "react-icons/bs";

const Header = ({freeCoin}) => {
    
    return (
        <div className='flex justify-between max-w-7xl'>
            <div >
                <img  src={logo} alt="" />

            </div>
            <div className='flex items-center gap-3.5'>
                <p>Home</p>
                <p>Fixture</p>
                <p>Teams</p>
                <p>Schedules</p>
                <button className='btn '>${freeCoin} Coin<BsCoin className='bg-amber-400 rounded-full'></BsCoin></button>
            </div>
        </div>
    );
};

export default Header;