import React, { useState } from "react";
import AddPlayerForm from "./AddPlayerForm";
import AddPokemonForm from "./AddPokemonForm";
import RemovePlayer from "./RemovePlayer";
import RemovePokemon from "./RemovePokemon";
import "../../styles/admin_dashboard.css";

export default function AdminDashboard() {
  const [activeOption, setActiveOption] = useState(null);

  const renderContent = () => {
    switch (activeOption) {
      case "addPlayer":
        return <AddPlayerForm />;
      case "addPokemon":
        return <AddPokemonForm />;
      case "removePlayer":
        return <RemovePlayer />;
      case "removePokemon":
        return <RemovePokemon />;
      default:
        return;
    }
  };

  return (
    <main className="admin_dashboard">
      <section className="admin_dashboard_header">
        <button
          onClick={() => setActiveOption("addPlayer")}
          className={`admin_dashboard_items ${
            activeOption === "addPlayer" ? "ativo" : ""
          }`}
        >
          ADD PLAYER
        </button>

        <button
          onClick={() => setActiveOption("addPokemon")}
          className={`admin_dashboard_items ${
            activeOption === "addPokemon" ? "ativo" : ""
          }`}
        >
          ADD POKEMON
        </button>
        <button
          onClick={() => setActiveOption("removePlayer")}
          className={`admin_dashboard_items ${
            activeOption === "removePlayer" ? "ativo" : ""
          }`}
        >
          REMOVE PLAYER
        </button>
        <button
          onClick={() => setActiveOption("removePokemon")}
          className={`admin_dashboard_items ${
            activeOption === "removePokemon" ? "ativo" : ""
          }`}
        >
          REMOVE POKEMON
        </button>
      </section>

      <section className="admin_dashboard_content">{renderContent()}</section>
    </main>
  );
}
