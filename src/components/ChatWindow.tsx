import { useState } from "react";
import Message from "./Message";
import ChatInput from "./ChatInput";
import { askBot } from "../services/googleAI";

type ChatWindowProps = {
  botName: string;
};

export default function ChatWindow({ botName }: ChatWindowProps) {
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([]);

  const handleSend = async (text: string) => {
    // Adiciona mensagem do usuário
    setMessages([...messages, { sender: 'user', text }]);

    // Chama IA real
    try {
      const answer = await askBot(botName, text);
      setMessages((prev) => [...prev, { sender: 'bot', text: answer }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: "Desculpe, ocorreu um erro ao buscar a resposta." },
      ]);
      console.error(err);
    }
  };

  return (
    <div className="chat-window">
      <h3>{botName}</h3>
      <div className="messages">
        {messages.map((m, i) => (
          <Message key={i} sender={m.sender} text={m.text} />
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
}