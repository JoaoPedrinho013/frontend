import React from "react";
import Select from "react-select";
import { options_players,options_pokemons, options_capture_methods, options_shiny_status, customStyles } from "./utils/SelectConfig";
import "../../styles/admin_forms.css";
import "../../styles/add_pokemon_form.css";

export default function AddPokemonForm() {
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
      <Select
        options={options_capture_methods}
        placeholder="Catch Method"
        className="admin_select"
        styles={customStyles}
      />
      <Select
        options={options_shiny_status}
        placeholder="Status"
        className="admin_select"
        styles={customStyles}
      />
      <div className="admin_input_section">
        {"Encounters "}
        <input type="number" name="Encounters" id="input_encounters" min={1} className="admin_input" />
      </div>
      <div className="admin_input_section">
        {"Capture Date "}
        <input type="datetime-local" name="CaptureDate" id="capture_date" 
        className="admin_input"/>
      </div>
      <section className="admin_checkbox_section">
        <div>
          {"Shiny Secret "}
          <input type="checkbox" name="" id="" />
        </div>
        <div>
          {"Alpha Shiny "}
          <input type="checkbox" name="" id="" />
        </div>
        <div>
          {"Shiny Rare "}
          <input type="checkbox" name="" id="" />
        </div>
      </section>
      <button type="submit" className="admin_button">
        Add Pokemon
      </button>
    </form>
  );
}
