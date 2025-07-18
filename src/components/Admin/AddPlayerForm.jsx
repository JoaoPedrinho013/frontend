import React from 'react';

export default function AddPlayerForm() {
  return (
    <div>
      <h2>Adicionar Jogador</h2>
      <form>
        <input type="text" placeholder="Nome do Jogador" />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
