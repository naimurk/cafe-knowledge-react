import React, { useState } from 'react';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';

const App = () => {
  

  return (
    <div className=' w-full lg:w-3/5 lg:mx-auto'>
       <Navbar></Navbar>
       <Home></Home>
    </div>
  );
};

export default App;