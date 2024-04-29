import ChatBox from "../components/ChatBox";
import Navbar from "../components/Navbar";
import SendMessages from "../components/SendMessages";

 
interface IProps {
}

const home = ({} : IProps) => {
    return (
        <>
        <Navbar />
        <ChatBox />
        <SendMessages />
        </>
    )
    }

    export default home; 