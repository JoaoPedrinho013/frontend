import React from 'react';
import Select from 'react-select';
import "../../styles/admin_forms.css";
import { options_players, customStyles } from './utils/SelectConfig';




export default function RemovePlayer() {
  return (
    <form className="admin_form">
        <Select
        options={options_players}
        placeholder="Select Player"
        className="admin_select"
        styles={customStyles}
      />
        <button type="submit" className='admin_button'>Remove Player</button>
      </form>
    
  );
}
