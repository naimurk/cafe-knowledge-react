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
        
        const existingItem = cards.find((item) => item === name);
        if (!existingItem) {
          const newCard = [...cards, name];
          setCard(newCard);
          setTime(parseInt(time) + parseInt(Time));
        }
        else{
            alert('product added')
        }
        // const newCard = [...cards,name]
        // setCard(newCard)
        // setTime( parseInt(time) + parseInt(Time))

      
    }

    const handleIncrease = (newTime) => {
        const updateTime = parseInt(Time) - parseInt(newTime);
        setTime(updateTime)
    }
    
    // console.log(Time);
    // console.log(cards);
    
    return (
        <div className='lg:flex lg:gap-8'>
            <Card handleIncrease = {handleIncrease} handleCart = {handleCart} cardData = {cardData}></Card>
            
             <SideCart time = {Time} card = {cards}></SideCart>
            
        </div>
    );
};

export default Home;