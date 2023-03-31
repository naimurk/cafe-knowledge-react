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
    
    const [cards , setCard] = useState([])
    const [Time , setTime] = useState(0)
    

    const handleCart = (name , time) => {
        const newCard = [...cards,name]
        setCard(newCard)
        const updatatime = Time + time
        setTime(updatatime)
        console.log(time);
    }

    // console.log(cards);
    
    return (
        <div className='lg:flex lg:gap-8'>
            <Card handleCart = {handleCart} cardData = {cardData}></Card>
            
             <SideCart card = {cards}></SideCart>
            
        </div>
    );
};

export default Home;