import React from 'react';
import { CiCircleRemove } from "react-icons/ci";
const Selected = ({ chosenCricketers,handleRemove }) => {
    console.log(chosenCricketers)

    return (
        <div>
            {chosenCricketers.map((cricketer, idx) =>
                <div key={idx} className='my-3 flex justify-between items-center'>
                    <div className='flex gap-3'>
                        <div>
                            <img className='w-15 h-15 object-cover' src={cricketer.img} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold'>{cricketer.name}</h3>
                            <p>{cricketer.hand_used}</p>
                        </div>
                    </div>
                    <button onClick={() => {handleRemove(idx)}}>
                        <CiCircleRemove className="text-2xl bg-red-500 rounded-full" />
                    </button>
                </div>

            )}


        </div>
    );
};

export default Selected;