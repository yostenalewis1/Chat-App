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
    <div className="bg-neutral-50  border-t border-violet-600  w-full py-2 shadow-lg">
      <form className="flex">
        <input
            type="text"
            placeholder="Enter your message..."
            className="placeholder-violet-600 md:pl-20  bg-neutral-50 pl-5 w-full focus:outline-none  rounded-r-none text-lg absloute"
            value={message.text}
            onChange={(e) => setMessage({ ...message, text: e.target.value })}
        />
        <button
            type="submit"
            className="bg-violet-600 text-white font-semibold text-lg px-4 py-2 md:mr-28 mr-4 rounded-md"
            onClick={handleSubmit}
        >
            Send
        </button>
      </form>
    </div>
  );
};

export default SendMessages;
