import React from "react";
import { Link } from "react-router-dom";
import '../styles/footer.css';
import logo from '../assets/images/turma.jpeg';
import Navegation from "./Navegation";
import Form_Whats from './Form_Whats';

export default function Footer() {
  return (
    <footer className="footer">
      <section className="section_footer">
        <a href="/"><img src={logo} alt="Charizard" className="logo_panelinha" /></a>
      <Navegation layout={"column"} />
      <Form_Whats />  
      </section>

      <p className="rights_reserved">Panelinha 2025 &copy; All rights reserved.</p>

    </footer>
  );
}
