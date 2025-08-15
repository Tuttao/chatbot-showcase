type MessageProps = {
  sender: 'user' | 'bot';
  text: string;
};

export default function Message({ sender, text }: MessageProps) {
  return (
    <div className={`message ${sender}`}>
      <span>{text}</span>
    </div>
  );
}