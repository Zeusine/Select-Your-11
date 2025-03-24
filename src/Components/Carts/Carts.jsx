import React from 'react';
import Cart from '../Cart/Cart';

const Carts = ({ cricketers }) => {
    
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mb-25'>
            {
                cricketers.map((cricketer, idx) => <Cart key={idx} cricketer = {cricketer}></Cart>)
            }
        </div>
    );
};

export default Carts;