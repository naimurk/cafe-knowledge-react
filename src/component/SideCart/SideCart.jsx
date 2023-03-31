import React from 'react';
import SingleSideCart from '../SingleSideCart/SingleSideCart';

const SideCart = (props) => {
    console.log(props);
    const cards = props.card
    const time = props.time
    
    return (
        <div className=' mt-11 bg-slate-100 p-3 w-4/12 border'>
            <div className='bg-white text-blue-600 text-xl font-semibold p-5'>
                <h1>Spent Time on Read: {time}</h1>
            </div>
           {
            cards.map(card => <SingleSideCart card = {card}></SingleSideCart>)
           }
        </div>
    );
};

export default SideCart;