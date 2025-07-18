import React, { useState } from 'react';
import AddPlayerForm from './AddPlayerForm';
import AddPokemonForm from './AddPokemonForm';
import RemovePlayer from './RemovePlayer';
import RemovePokemon from './RemovePokemon';

export default function AdminDashboard() {
  const [activeOption, setActiveOption] = useState(null);

  const renderContent = () => {
    switch (activeOption) {
      case 'addPlayer':
        return <AddPlayerForm />;
      case 'addPokemon':
        return <AddPokemonForm />;
      case 'removePlayer':
        return <RemovePlayer />;
      case 'removePokemon':
        return <RemovePokemon />;
      default:
        return 
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Quadrados com opções */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <button onClick={() => setActiveOption('addPlayer')} style={squareStyle}>Adicionar Jogador</button>
        <button onClick={() => setActiveOption('addPokemon')} style={squareStyle}>Adicionar Pokémon</button>
        <button onClick={() => setActiveOption('removePlayer')} style={squareStyle}>Remover Jogador</button>
        <button onClick={() => setActiveOption('removePokemon')} style={squareStyle}>Remover Pokémon</button>
      </div>

      {/* Conteúdo dinâmico */}
      <div style={{ marginTop: '30px' }}>
        {renderContent()}
      </div>
    </div>
  );
}

// Estilo dos "quadrados"
const squareStyle = {
  flex: 1,
  padding: '20px',
  textAlign: 'center',
  border: '2px solid #333',
  borderRadius: '10px',
  backgroundColor: '#f0f0f0',
  cursor: 'pointer'
};
