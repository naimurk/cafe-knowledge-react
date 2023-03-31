import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleCart = (props) => {
    // console.log(props);
    const { blog_img,title,author_img,read_time,published,author} = props.card
    const handleCart = props.handleCart
    const handleIncrease = props.handleIncrease

    

  
    return (
        <div className='  p-5 lg:p-0 my-14 '>
            <img className='w-full' src={blog_img} alt="" />
            <div className='flex justify-between my-7 items-center gap-5 '> 
                <div className='flex gap-3 items-center'>
                    <img className='w-12 h-12 rounded-full' src={author_img} alt="" />
                    <div>
                        <p className='font-bold'>{author}</p>
                        <p>published : {published}</p>
                    </div>
                </div>
                <div className=''>
                    <p>read time : {read_time} <FontAwesomeIcon className='cursor-pointer' onClick={()=>handleCart(title,read_time)} icon={faBookmark} /></p>
                </div>
            </div>
            <h1 className='lg:text-3xl text:-2xl font-bold my-3'>{title}</h1>
            <a onClick={()=> handleIncrease(read_time)} className='underline text-blue-600 cursor-pointer' >Mark as read</a>
        </div>
    );
};

export default SingleCart;