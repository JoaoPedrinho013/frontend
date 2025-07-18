import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';

import Header from './components/Header';
import Shiny_Showcase from './pages/Shiny_Showcase';
import Login from './components/Login';
import Admin from './components/Admin/Admin_Dashboard'
import Shiny_Dex from './pages/Shiny_Dex';
import Shiny_Rare from './pages/Shiny_Rare';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Shiny_Showcase />} />
        <Route path="/shiny-dex" element={<Shiny_Dex />} />
        <Route path="/shiny-rare" element={<Shiny_Rare />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);



