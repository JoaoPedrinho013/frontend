import React, { useState } from 'react';
import '../styles/form_whats.css';

export default function WhatsAppForm() {
  const [discord, setDiscord] = useState('');
  const [nickname, setNickname] = useState('');
  const [playerType, setPlayerType] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalMessage = `Hello! I'd like to join the team.\n\n` +
                         `Discord: ${discord}\n` +
                         `In-game Nickname: ${nickname}\n` +
                         `Player Type: ${playerType}\n` +
                         `Reason: ${message}`;

    const whatsappNumber = '5511999999999';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`;

    window.open(url, '_blank');
  };

  return (
    <form className="whatsapp_form" onSubmit={handleSubmit}>
      <label>Join us!</label>
      <input
        type="text"
        value={discord}
        onChange={(e) => setDiscord(e.target.value)}
        placeholder='Discord Nickname - Ex.: User#1234'
        required
      />

      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder='In-game Nickname - Ex.: User'
        required
      />

      <select
        value={playerType}
        onChange={(e) => setPlayerType(e.target.value)}
        required
        className="player_type_select"
      >
        <option value="shiny_hunter">Shiny Hunter</option>
        <option value="pvp_player">PvP Player</option>
        <option value="both">Both</option>
      </select>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows="4"
        placeholder='Why do you want to join the team?'
        required
      />

      <button type="submit" className="send_button">Send to WhatsApp</button>
    </form>
  );
}
