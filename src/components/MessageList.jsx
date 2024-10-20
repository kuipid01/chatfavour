/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import MessageItem from "./MessageItem";
import { groupMessagesByDate } from "../utils/format";

const MessageList = ({ messages }) => {
  const groupedMessages = groupMessagesByDate(messages); // Group messages by date

  return (
    <div className="message-list h-[90vh] overflow-y-auto  flex flex-col  ">
      {Object.keys(groupedMessages).map((dateHeading) => (
        <div
          className=" flex  flex-col w-full gap-[33px] p-4 pb-10 "
          key={dateHeading}
        >
          <div className="date-heading">{dateHeading}</div>{" "}
          {/* Display the date heading */}
          {groupedMessages[dateHeading].map((message) => (
            <MessageItem key={message.id} message={message} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
