import React from "react";

export default function Message({ message, sender }) {
  console.log("Message: ", message, "from", sender);
  return (
    <div
      className={`message ${
        sender === "user" ? "user-message" : "bot-message"
      }`}
    >
      <span
        className={`message-content ${
          sender === "user" ? "user-content" : "bot-content"
        }`}
      >
        {message}
      </span>
    </div>
  );
}
