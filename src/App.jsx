import React, { useState } from 'react';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
// import Question from './component/Q&A_part/Question';

const App = () => {
  

  return (
    <div className=' w-full lg:w-3/5 lg:mx-auto'>
       <Navbar></Navbar>
       <Home></Home>
       {/* <Question></Question> */}
    </div>
  );
};

export default App;