import { useEffect, useRef, useState } from "react";
import { socket } from "../socket/socket";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import SendMessages from "./SendMessages";

interface IProps {}

interface IMessage {
    from: string;
    text: string;
    createdAt: string;
}

const ChatBox = ({}: IProps) => {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const {activeChat} = useSelector((state: RootState) => state.chats);
    const {name} = useSelector((state: RootState) => state.user);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {     
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        console.log(activeChat);
        socket.emit("getPrivateMessages", activeChat.id);
        
        const handlePrivateMessages = (messages: IMessage[]) => { 
            setMessages(messages);            
        }
        socket.on("privateMessages", handlePrivateMessages)
    
        const handlePrivateMessage = (message: IMessage) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        }
        socket.on("privateMessage", handlePrivateMessage)
    
        // Cleanup function
        return () => {
            socket.off("privateMessages", handlePrivateMessages);
            socket.off("privateMessage", handlePrivateMessage);
        }
    }, [activeChat]);

    useEffect(scrollToBottom, [messages]);

  return (
    <div className="flex flex-col w-full h-full overflow-y-hidden">
    <div className="flex flex-col w-full h-full overflow-y-auto bg-white">
        {
            activeChat.id !== "" && <div className="text-center text-violet-600 text-lg font-semibold">Chat with {activeChat.name}</div>
        }
        {activeChat.id === "" && <div className="text-center text-violet-600 text-lg font-semibold">Select a chat to start messaging</div>}
        {activeChat.id !== "" && messages?.length === 0 && <div className="text-center text-violet-600 text-lg font-semibold">No messages yet</div>}
        {messages?.map((message, index) => (
             (message.from === activeChat.name || message.from == name) && <div className="flex flex-col w-full" key={index}>
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
    <SendMessages />
    </div>
  );
};

export default ChatBox;