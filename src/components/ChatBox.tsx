import { useState, useEffect } from "react";
import { socket } from "../socket/socket";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

interface IProps {}

interface IMessage {
    from: string;
    text: string;
    createdAt: string;
}

const ChatBox = ({}: IProps) => {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const {name} = useSelector((state: RootState) => state.user);

    useEffect(() => {
        socket.on("newMessage", (message: IMessage) => {
            setMessages((prevMessages) => [...prevMessages, message]);
            console.log(message);
        });

        return () => {
            socket.off("newMessage");
        };
    }, []);

  return (
    <div className="flex flex-col w-full h-full overflow-y-auto bg-white">
        {messages.map((message, index) => (
            <div className="flex flex-col w-full" key={index}>
            <div className={`text-violet-600 text-center font-semibold text-lg ${message.from === name ? 'text-right ml-auto' : 'text-left mr-auto'} px-2 my-1`}>
                {message.from}
            </div>
            <div key={index} className={`bg-violet-600 text-white p-2 m-2 rounded-lg ${message.from === name ? 'text-right ml-auto' : 'text-left mr-auto'} max-w-2xl`}>
                {message.text}
            </div>

            </div>
        ))}
    </div>
  );
};

export default ChatBox;