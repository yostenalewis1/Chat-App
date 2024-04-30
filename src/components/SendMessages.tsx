import React, { useRef, useState } from "react";
import { socket } from "../socket/socket";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";


const SendMessages = () => {
    const [message, setMessage] = useState<string>("");

    const {activeChat} = useSelector((state: RootState) => state.chats);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (message.trim() === '') {
            return;
        }
        
        socket.emit('privateMessage', {to: activeChat.id, message});
        socket.emit("getPrivateMessages", activeChat.id);

        setMessage('');
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

  return (
    <div className="bg-neutral-50  border-t border-violet-600  w-full py-2 shadow-lg">
      <form className="flex" onSubmit={handleSubmit}>
        <input
            ref={inputRef}
            type="text"
            placeholder="Enter your message..."
            className="placeholder-violet-600 md:pl-20 text-black bg-neutral-50 pl-5 w-full focus:outline-none  rounded-r-none text-lg absloute"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />
        <button
            type="submit"
            className="bg-violet-600 text-white font-semibold text-lg px-4 py-2 md:mr-28 mr-4 rounded-md"
        >
            Send
        </button>
      </form>
    </div>
  );
};

export default SendMessages;