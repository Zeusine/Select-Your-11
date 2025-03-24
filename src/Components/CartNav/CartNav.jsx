import React, { useState } from 'react';
import Carts from '../carts/carts';
import Selected from '../Selected/Selected';

const CartNav = ({cricketers}) => {
    const [button, setButton] = useState(true);

    const handleAvailableButton= () => {
        setButton(true)
        
    }
    const handleSelectedButton= () => {
        setButton(false)
        
    }

    
    


    return (
        <div className='relative mb-50'>
            <div className='flex justify-between mt-10'>
                <h3>Available Players</h3>
                <div>
                    <button onClick={() => handleAvailableButton()} className={`btn border-none ${button == true? "bg-[#E7FE29]": "bg-gray-200 text-gray-500" }`}>Available
                    </button>
                    <button onClick={() => handleSelectedButton()} className={`btn border-none ${button== false?  "bg-[#E7FE29]": "bg-gray-200 text-gray-500"}`}>Selected</button>
                </div>
            </div>
            <div>
                {
                    button == true? <Carts cricketers = {cricketers}></Carts> : <Selected></Selected>
                }
                
                
            </div>
            
        </div>
    );
};

export default CartNav;