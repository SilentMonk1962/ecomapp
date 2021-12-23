import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.component';
const HatsPage =()=>(
  <div>
    <h1>
      Hats Page Bitches
    </h1>
  </div>
);

function App(){
  return ( <div>
    <Header/>
    <Routes>
    <Route path = '/' element={<HomePage/>}/>
    <Route path = '/hats' element={<HatsPage/>}/>
    <Route path='/shop' element={<ShopPage/>}/>
    </Routes>
  </div>
  )
}

export default App;
