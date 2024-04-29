import { useState, useEffect } from "react";
import { socket } from "../socket/socket";

interface IProps {}

interface IMessage {
    from: string;
    text: string;
    createdAt: string;
}

const ChatBox = ({}: IProps) => {
    const [messages, setMessages] = useState<IMessage[]>([]);

    useEffect(() => {
        socket.on("newMessage", (message: IMessage) => {
            setMessages((prevMessages) => [...prevMessages, message]);
            console.log(message);
        });

        // return () => {
        //     socket.off("newMessage");
        // };
    }, []);

  return (
    <div className="bg-white w-full h-96">
        <div className="containerWrap">
            {messages.map((message, index) => (
            <div key={index} className="bg-violet-600 text-white p-2 m-2 rounded-lg">
                {message.from}: {message.text}
            </div>
            ))}
        </div>
    </div>
  );
};

export default ChatBox;
