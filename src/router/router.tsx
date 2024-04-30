import { Route,Outlet, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
 
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import ChatBox from "../components/ChatBox";
import ProtectedRoute from "../components/ProtectedRouter";
import SideBar from "../components/SideBar";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Login />} />
                <Route path="Home" element={
                    <ProtectedRoute >
                        <div className="flex flex-col max-h-screen h-screen">
                            <div className="fixed top-0 w-full z-50">
                                <Navbar />
                            </div>
                            <div className="flex h-full pt-10">
                                <SideBar />
                                <Outlet />
                            </div>
                        </div>
                    </ProtectedRoute>
                }>
                    <Route index element={<ChatBox />} />
                </Route>
        </>
    )
);

export default router;


