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
    <div className="flex flex-col h-[10vh] fixed bottom-0 right-0 w-3/4 space-y-2 p-4 bg-gray-100 rounded-lg">
      {selectedImage && (
        <div className="image-preview mb-2">
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Preview"
            className="w-24 h-24 object-cover rounded-md border border-gray-300"
          />
        </div>
      )}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type a message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
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
        </label>
        <button
          onClick={handleSend}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
