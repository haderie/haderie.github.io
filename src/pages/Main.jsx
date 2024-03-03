import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';

import About from './About';
import Banner from './Banner';

const Main = () => {
  return (
    
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
     <Route path='/about' element={<About />} />
     <Route path='/Home' element={<Banner />} />
    </Routes>
  );
}

export default Main;