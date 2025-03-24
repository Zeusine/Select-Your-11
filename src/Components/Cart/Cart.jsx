import React from 'react';

const Cart = ({ cricketer,handleChosenPlayers }) => {
    const { img, name, country, position, hand_used, price } = cricketer
    

    const randomNumber = parseInt(Math.random(0,5) * 100);
    
    
    return (
        <div className='mb-7'>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={img}
                        alt="Shoes"
                        className="rounded-xl h-78 w-full object-cover" />
                </figure>
                <div className="mt-3 space-y-3 p-5">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex justify-between '>
                        <p className='text-gray-500 font-extralight'>{country}</p>
                        <button className='btn border-none text-gray-500 font-extralight'>{position}</button>
                    </div>
                    <hr className='border-gray-300' />
                    <div>
                        <h4>Rating : <span className='text-gray-500'>{randomNumber}</span></h4>
                        <p>Hand Used: <span className='text-gray-500'>{hand_used}</span></p>

                        <div className='flex justify-between'>
                            <p>Price: <span className='text-gray-500'>$ {price}</span></p>
                            <button className="btn font-light border-none text-gray-500" onClick={() => handleChosenPlayers(cricketer)}>Choose Player</button>

                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Cart;