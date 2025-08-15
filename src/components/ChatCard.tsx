type ChatCardProps = {
  botName: string;
  onClick: () => void;
};

export default function ChatCard({ botName, onClick }: ChatCardProps) {
  return (
    <div 
      className="chat-card" 
      onClick={onClick} 
      style={{
        border: "1px solid #d1d5db",
        borderRadius: "12px",
        padding: "20px",
        margin: "10px",
        width: "200px",
        textAlign: "center",
        cursor: "pointer",
        backgroundColor: "#f3f4f6",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <h3>{botName}</h3>
      <p>Click to start!</p>
    </div>
  );
}
