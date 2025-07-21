import React from "react";
import { Link } from "react-router-dom";
import '../styles/header.css';
import logo from '../assets/images/logo2.png';
import Navegation from "./Navegation";

export default function Header() {
  return (
    <header className="header">
      <a href="/"><img src={logo} alt="logo"  className="logo_panelinha"/></a>
     <Navegation layout={"row"}/>
     
    </header>
  );
}
