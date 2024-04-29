import { Route,Outlet, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
 
import Login from "../pages/Login";
import ChatRoom from "../pages/ChatRoom";
import Navbar from "../components/Navbar";
import SendMessages from "../components/SendMessages";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={
                <div>
                    <Outlet />
                </div>
            }>
                <Route index element={<Login />} />
                <Route path="Home" element={
                    <div className="w-full bg-white">
                        <Navbar />
                        <Outlet />
                        <SendMessages />
                    </div>
                }>
                    <Route index element={<ChatRoom />} />
                </Route>
            </Route>
        </>
    )
);

export default router;


