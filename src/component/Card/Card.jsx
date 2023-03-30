import React from 'react';
import SingleCart from '../SignleCart/SingleCart';

const Card = (props) => {
    // console.log(props);
    const cards = props.cardData
    const handleCart = props.handleCart
    // console.log(card);
    // console.log(cardData,handleCart);
    return (
        <div className='w-8/12'>
            {
                cards.map(card => <SingleCart
                     key = {card}
                     handleCart = {handleCart}
                     card = {card}></SingleCart>)
            }
        </div>
    );
};

export default Card;