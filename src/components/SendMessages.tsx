import React, { useState } from "react";
import { socket } from "../socket/socket";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
interface IMessage {
    from: string;
    text: string;
}

const SendMessages = () => {
    const [message, setMessage] = useState<IMessage>({
        from: '',
        text: '',
    });
    const {name} = useSelector((state: RootState) => state.user);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (message.text.trim() === '') {
            return;
        }
        const messageToSend = {
            from: name,
            text: message.text,
        };
        socket.emit('createMessage', messageToSend);
        setMessage({
            from: '',
            text: '',
        })
    }

  return (
    <div className="bg-neutral-50  border-t border-violet-600  w-full py-10 shadow-lg">
      <form className="containerWrap flex ">
        <input
            type="text"
            placeholder="Enter your message..."
            className="placeholder-violet-600 input w-full focus:outline-none bg-gray-200  rounded-r-none text-lg"
            value={message.text}
            onChange={(e) => setMessage({ ...message, text: e.target.value })}
        />
        <button
            type="submit"
            className="bg-violet-600 text-white font-semibold text-lg px-4 py-2 rounded-l-none"
            onClick={handleSubmit}
        >
            Send
        </button>
      </form>
    </div>
  );
};

export default SendMessages;
