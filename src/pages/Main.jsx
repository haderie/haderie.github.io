import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';

import About from './About';
import Banner from './Banner';

const Main = () => {
  return (
    
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
     <Route path='/Home' element={<Banner />} />
     <Route path='/about' element={<About />} />
    </Routes>
  );
}

export default Main;