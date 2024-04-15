import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Infoadd from './Infoadd';
import App from './App';
function Routing(){
  return(
    <div>
      <Routes>
      <Route path="/" element={<App />} />
       <Route path="/Infoadd" element={<Infoadd />} />
</Routes>
</div>
);
  }
export default Routing;
