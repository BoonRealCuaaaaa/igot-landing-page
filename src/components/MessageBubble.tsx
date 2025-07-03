import React from "react";
import "./MessageBubble.css";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className={`message-bubble ${message.sender}`}>
      <div className="message-content">
        <div className="message-text">{message.content}</div>
        <div className="message-time">{formatTime(message.timestamp)}</div>
      </div>
      {message.sender === "ai" && (
        <div className="message-avatar">
          <span>🤖</span>
        </div>
      )}
      {message.sender === "user" && (
        <div className="message-avatar">
          <span>👤</span>
        </div>
      )}
    </div>
  );
};

export default MessageBubble;
