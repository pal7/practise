import React, { useState } from "react";

export default function InputBox({ sendMessage }) {
  const [input, setInput] = useState("");

  function handleSend() {
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  }

  return (
    <div className='input-box'>
      <input
        type='text'
        className='input-field'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Type a message...'
      />
      <button onClick={handleSend} className='send-button'>
        Send
      </button>
    </div>
  );
}
