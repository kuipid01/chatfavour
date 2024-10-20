/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

const MessageInput = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSend = () => {
    if (inputValue || selectedImage) {
      const message = {
        id: Date.now(),
        timestamp: Date.now(),
        sender: "user",
        type: selectedImage ? "image" : "text",
        text: inputValue,
        imageUrl: selectedImage ? URL.createObjectURL(selectedImage) : null,
      };
      onSendMessage(message);
      setInputValue("");
      setSelectedImage(null);
    }
  };

  const handleImageUpload = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  return (
    <div className="flex h-[10vh] fixed bottom-0 right-0 w-full md:w-3/4 space-y-2 p-4 bg-gray-100 rounded-lg">
      {selectedImage && (
        <div className="image-preview relative mr-4">
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Preview"
            className="w-24 h-[10vh] object-cover rounded-md border border-gray-300"
          />
          <span
            onClick={() => setSelectedImage(null)}
            className=" absolute cursor-pointer text-red-500 top-0 right-2 font-bold"
          >
            x
          </span>
        </div>
      )}
      <div className="flex flex-1 items-center space-x-2">
        <input
          type="text"
          placeholder="Type a message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 placeholder:text-[12.5px] placeholder:leading-[18.75px] border-[#9A9A9A] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
        />
        {/* <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer text-green-500 hover:text-green-600"
        >
          📷
        </label> */}
        <button
          onClick={handleSend}
          className="bg-[#007145] leading-[18.75px] text-white text-[12.5px] h-[29px] w-[58px] rounded-lg hover:bg-green-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
