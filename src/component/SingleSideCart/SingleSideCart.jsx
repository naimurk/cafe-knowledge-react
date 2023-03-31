import React from 'react';

const SingleSideCart = ({card}) => {
    // console.log(card);
    return (
        <div className='my-5 p-5 rounded-lg bg-white'>
            <h1 className='text-base font-bold'>{card}</h1>
        </div>
    );
};

export default SingleSideCart;