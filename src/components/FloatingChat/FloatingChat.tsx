"use client";
import { useState } from "react";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="fixed bottom-4 right-4 flex flex-col items-end space-y-2 z-50"
    >
      {/* Button to toggle chat */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 focus:outline-none"
      >
        💬
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div
          className="bg-white rounded-lg shadow-lg w-80 h-96 p-4 flex flex-col space-y-4"
        >
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="text-lg font-semibold">Trợ Lý Chat</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✖
            </button>
          </div>
          <div className="flex-1 overflow-y-auto" id="widget-chat">
            {/* Nội dung của chat AI */}
            <p className="text-gray-600 text-sm">
              Xin chào! Tôi là trợ lý ảo của HONVIETSTORE. Bạn cần hỗ trợ gì không?
            </p>
          </div>
          <div className="border-t pt-2">
            <input
              type="text"
              placeholder="Gõ tin nhắn..."
              className="w-full p-2 border rounded-md focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* Chat Platform */}
      {/* {isOpen && (
        <div
          className="bg-white rounded-lg shadow-lg w-80 h-96 p-4 flex flex-col space-y-4 mt-2"
        >
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="text-lg font-semibold">Nền Tảng Chat</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✖
            </button>
          </div>
          <div className="flex-1 overflow-y-auto" id="chat-platform"> */}
            {/* Nội dung của nền tảng chat */}
            {/* <p className="text-gray-600 text-sm">
              Kết nối với chúng tôi để có trải nghiệm mua sắm tốt hơn!
            </p>
          </div>
        </div>
      )} */}
    </div>
  );
}