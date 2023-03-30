import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import SideCart from '../SideCart/SideCart';

const Home = () => {
    const [cardData , setCardData] = useState([])
    useEffect(()=>{
        fetch('fake.json')
        .then(res=> res.json())
        .then(data => setCardData(data))
    },[])
    
    return (
        <div className='lg:flex lg:gap-8'>
            <Card cardData = {cardData}></Card>
            <SideCart></SideCart>
        </div>
    );
};

export default Home;