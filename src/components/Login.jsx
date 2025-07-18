import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    // verificar usuario e senha antes de ir pra proxima pagina kkkkk
    navigate('/admin'); 
  };

  return (
    <section className='section_form_login'>
      <div className="login_overlay"></div>
      <form className='form_login' id='form_login' onSubmit={handleSubmit}>
        <input type="text" className="form_user" id='form_user' placeholder='User ' />
        <input type="password" className="form_password" id='form_password' placeholder='Password ' />
        <button type="submit" className='form_login_button'>Login</button>
      </form>
    </section>
  );
}
