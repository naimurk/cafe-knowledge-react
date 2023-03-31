import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import SideCart from '../SideCart/SideCart';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          
        //   setTime(parseInt(time) + parseInt(Time));
        }
        else{
            toast("Item already exist");

           // ar jodi product add korthe na cai eto tok 

        //     const newCard = [...cards, name];
        //   setCard(newCard);
        //   setTime(parseInt(time) + parseInt(Time));
        }
      

      
    }

    const handleIncrease = (newTime) => {
        
        const updateTime = parseInt(Time) + parseInt(newTime);
        
        setTime(updateTime)
    }
    
    // console.log(Time);
    // console.log(cards);
    
    return (
        <div className='lg:flex lg:gap-8'>
            <Card handleIncrease = {handleIncrease} handleCart = {handleCart} cardData = {cardData}></Card>
            
             <SideCart time = {Time} card = {cards}></SideCart>
             <ToastContainer />
            
        </div>
    );
};

export default Home;