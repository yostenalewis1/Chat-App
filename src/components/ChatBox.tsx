import { useEffect, useRef } from "react";
import { socket } from "../socket/socket";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { addMessage } from "../app/features/messagesSlice";

interface IProps {}

interface IMessage {
    from: string;
    text: string;
    createdAt: string;
}

const ChatBox = ({}: IProps) => {
    const dispatch = useDispatch();
    const {messages} = useSelector((state: RootState) => state.messages);
    const {name} = useSelector((state: RootState) => state.user);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        socket.on("newMessage", (message: IMessage) => {
            dispatch(addMessage(message));
        });

        return () => {
            socket.off("newMessage");
        };
    }, []);

    useEffect(scrollToBottom, [messages]);

  return (
    <div className="flex flex-col w-full h-full overflow-y-auto bg-white">
        {messages.map((message, index) => (
            <div className="flex flex-col w-full" key={index}>
            <div className={`text-violet-600 text-center font-semibold text-lg ${message.from === name ? 'text-right ml-auto' : 'text-left mr-auto'} px-2 my-1`}>
                {message.from}
            </div>
            <div key={index} className={`p-2 m-2 rounded-xl ${message.from === name ? 'bg-violet-600 text-white self-end max-w-2xl' : 'bg-white text-black self-start border '} `}>
                {message.text}
            </div>

            </div>
        ))}
        <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatBox;