import React, { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import ChatCard from "./components/ChatCard";
import logo from './shuriken2.gif';
import "./styles/chat.css";

function App() {
  const bots = ["Support", "Agenda", "Airlines"];
  const [activeBot, setActiveBot] = useState<string | null>(null);

  return (
    <div className="App" style={{ position: "relative", minHeight: "100vh" }}>
      {/* GIF girando */}
      <img
        src={logo}
        alt="shuriken"
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          width: 80,
          height: 80,
          animation: "spin 4s linear infinite",
          pointerEvents: "none"
        }}
      />

      {/* Página inicial com cards */}
      {!activeBot && (
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: "50px" }}>
          {bots.map((bot) => (
            <ChatCard key={bot} botName={bot} onClick={() => setActiveBot(bot)} />
          ))}
        </div>
      )}

      {/* Janela de chat ativa */}
      {activeBot && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <ChatWindow botName={activeBot} />
        </div>
      )}
    </div>
  );
}

export default App;