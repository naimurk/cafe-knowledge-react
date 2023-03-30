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
    
    const [card , setCard] = useState([])
    const handleCart = (name) => {
        const newCard = [...card,name]
        setCard(newCard)
    }

    
    
    return (
        <div className='lg:flex lg:gap-8'>
            <Card handleCart = {handleCart} cardData = {cardData}></Card>
            <SideCart card = {card} ></SideCart>
        </div>
    );
};

export default Home;