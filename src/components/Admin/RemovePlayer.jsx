import React from 'react';

export default function AddPlayerForm() {
  return (
    <div>
      <h2>Remover Jogador</h2>
      <form>
        {/* TROCAR ESSE INPUT POR UM SELECT QUE FAZ UMA PROCURA NO BANCO DE DADOS E LISTA OS PLAYERS CADASTRADOS */}
        <input type="text" placeholder="Nome do Jogador" />
        <button type="submit">Remover</button>
      </form>
    </div>
  );
}
