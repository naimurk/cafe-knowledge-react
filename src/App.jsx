import React from 'react';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';

const App = () => {
  return (
    <div className=' w-3/5 mx-auto'>
       <Navbar></Navbar>
       <Home></Home>
    </div>
  );
};

export default App;