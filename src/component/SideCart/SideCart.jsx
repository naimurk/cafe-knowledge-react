import React from 'react';

const SideCart = (props) => {
    // console.log(props);
    const card = props.card
    return (
        <div className='w-4/12 border'>
            <h1>{card.length}</h1>
            {/* <div className='bg-red-500'> <h1 className='' >{card}</h1></div> */}
        </div>
    );
};

export default SideCart;