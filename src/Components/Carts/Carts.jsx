import React from 'react';
import Cart from '../Cart/Cart';

const Carts = ({ cricketers, handleChosenPlayers }) => {
    
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mb-25'>
            {
                cricketers.map((cricketer, idx) => <Cart key={idx} cricketer = {cricketer} handleChosenPlayers={handleChosenPlayers}></Cart>)
            }
        </div>
    );
};

export default Carts;