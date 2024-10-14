/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import OrderComp from "./orderComp";

const MessageItem = ({ message }) => {
  const isUserMessage = message.sender === "user";

  return (
    <div
      className={` w-fit px-4 py-2 h-fit rounded-md message-item ${
        isUserMessage ? "sent" : "received"
      }`}
      style={{
        backgroundColor: isUserMessage ? "#007145" : "#f1f1f1",
        color: isUserMessage ? "#fff" : "#000",
        alignSelf: isUserMessage ? "flex-end" : "flex-start",
      }}
    >
      {message.type === "text" && <p>{message.text}</p>}
      {message.type === "image" && (
        <img
          className=" h-[100px] w-20"
          src={message.imageUrl}
          alt="Sent image"
        />
      )}
      {message.order && <OrderComp />}
    </div>
  );
};

export default MessageItem;
