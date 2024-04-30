import { Route,Outlet, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
 
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import ChatBox from "../components/ChatBox";
import SendMessages from "../components/SendMessages";
import ProtectedRoute from "../components/ProtectedRouter";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Login />} />
                <Route path="Home" element={
                    <ProtectedRoute >
                        <div className="flex flex-col max-h-screen h-screen">
                            <Navbar />
                            <Outlet />
                            <SendMessages />
                        </div>
                    </ProtectedRoute>
                }>
                    <Route index element={<ChatBox />} />
                </Route>
        </>
    )
);

export default router;


