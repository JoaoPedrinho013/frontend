import React from 'react';
import Select from 'react-select';
import "../../styles/admin_forms.css";
import { options_players, options_pokemons, customStyles } from './utils/SelectConfig';

export default function RemovePokemon() {
  return (
    <form className="admin_form">
        <Select
        options={options_players}
        placeholder="Select Player"
        className="admin_select"
        styles={customStyles}
      />
        <Select
        options={options_pokemons}
        placeholder="Select Pokemon"
        className="admin_select"
        styles={customStyles}
      />
        <button type="submit" className='admin_button'>Remove Pokemon</button>
      </form>
    
  );
}
