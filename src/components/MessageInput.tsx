import React, { useState, type KeyboardEvent } from "react";
import "./MessageInput.css";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim() || isLoading) return;

    setIsLoading(true);
    onSendMessage(message.trim());
    setMessage("");

    // Reset loading state after a short delay
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="message-input">
      <div className="input-container">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="message-textarea"
          rows={1}
          disabled={isLoading}
        />
        <button
          onClick={handleSend}
          disabled={!message.trim() || isLoading}
          className={`send-button ${isLoading ? "loading" : ""}`}
        >
          {isLoading ? "⏳" : "🚀"}
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
