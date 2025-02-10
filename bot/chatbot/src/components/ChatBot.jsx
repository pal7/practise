import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import InputBox from "./InputBox";

export default function ChatBot() {
  // const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { message: "Hi! How can I help you?", sender: "bot" },
  ]);

  const API_URL = "https://api.openai.com/v1/chat/completions";
  const API_KEY = "";

  function sendMessage(input) {
    if (!input.trim()) return;

    const userMessage = { message: input, sender: "user" };
    console.log(input);
    const botResponse = { message: "This is a mock response.", sender: "bot" };

    setMessages([...messages, userMessage, botResponse]);
  }

  return (
    <div className='chat-window'>
      <ChatWindow messages={messages} />
      <InputBox sendMessage={sendMessage} />
    </div>
  );
}
