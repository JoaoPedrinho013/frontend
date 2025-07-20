import React from 'react';
import "../../styles/admin_forms.css";

export default function AddPlayerForm() {
  return (
    <form className="admin_form">
        <input type="text" placeholder="Nickname" className='admin_input'/>
        <button type="submit" className='admin_button'>Add Player</button>
      </form>
    
  );
}
