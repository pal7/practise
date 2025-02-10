import React from "react";
import Message from "./Message";

export default function ChatWindow({ messages }) {
  console.log("Messages:", messages);
  return (
    <div className='chat-window'>
      {Array.isArray(messages) ? (
        messages.map((message, index) => (
          <Message
            key={index}
            message={message.message}
            sender={message.sender}
          />
        ))
      ) : (
        <p>No messages to display</p>
      )}
    </div>
  );
}
