import React, { useState } from "react";
import MessageList from "../components/MessageList";
import { mockMessages } from "../data";
import MessageInput from "../components/MessageInput";

const ChatApp = () => {
  const [messages, setMessages] = useState(mockMessages);

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div className="w-full h-screen  flex ">
      <div className=" w-1/4 h-screen bg-red-100"></div>
      <div
        className=" h-screen flex flex-1 flex-col justify-between
      "
      >
        <MessageList messages={messages} />
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatApp;
