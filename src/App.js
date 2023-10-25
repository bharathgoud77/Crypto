import React from 'react';
import Navbar from './Componets/Header';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Componets/Dashboard/Dashboard';
import Compare from './Componets/Compare/Compare';
import Home from './Componets/Home/Home';
import Pagedetails from './Componets/Dashboard/pagedetails';
import 'chart.js/auto';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/compare' element={<Compare />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/coin/:id' element={<Pagedetails />} />
      </Routes>
    </div>
  );
}

export default App;

 