import React from 'react';
import SingleCart from '../SignleCart/SingleCart';

const Card = ({cardData}) => {
    // console.log(cardData);
    return (
        <div className='w-8/12'>
            {
                cardData.map(card => <SingleCart
                     key = {card}
                     card = {card}></SingleCart>)
            }
        </div>
    );
};

export default Card;