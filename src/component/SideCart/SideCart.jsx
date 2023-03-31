import React from 'react';
import SingleSideCart from '../SingleSideCart/SingleSideCart';

const SideCart = (props) => {
    // console.log(props);
    const cards = props.card
    
    return (
        <div className=' bg-slate-100 p-3 w-4/12 border'>
            <h1>spent time on read</h1>
           {
            cards.map(card => <SingleSideCart card = {card}></SingleSideCart>)
           }
        </div>
    );
};

export default SideCart;