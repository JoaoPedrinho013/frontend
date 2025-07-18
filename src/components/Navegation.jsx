import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/navegation.css'; 

export default function Navegation({ layout }) {
  const location = useLocation();

  return (
    <nav className={`navegation navegation_${layout}`}>
      <ul className={`ul_navegation ul_navegation_${layout}`}>
        <li className={location.pathname === '/' ? 'ativo' : ''}>
          <Link to="/">SHINY SHOWCASE</Link>
        </li>
        <li className={location.pathname === '/shiny-dex' ? 'ativo' : ''}>
          <Link to="/shiny-dex">SHINY DEX</Link>
        </li>
        <li className={location.pathname === '/shiny-rare' ? 'ativo' : ''}>
          <Link to="/shiny-rare">SHINY RARES</Link>
        </li>
        <li className={location.pathname === '/login' ? 'ativo' : ''}>
          <Link to="/login">LOGIN</Link>
        </li>
      </ul>
    </nav>
  );
}
