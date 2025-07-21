import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';

import Header from './components/Header';
import ShinyShowcase from './pages/Shiny_Showcase';
import Login from './components/Login';
import Admin from './components/Admin/AdminTable.tsx'
import ShinyDex from './pages/Shiny_Dex';
import ShinyRare from './pages/Shiny_Rare';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ShinyShowcase />} />
        <Route path="/shiny-dex" element={<ShinyDex />} />
        <Route path="/shiny-rare" element={<ShinyRare />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);



