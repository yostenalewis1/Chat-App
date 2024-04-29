import { BrowserRouter as Router, Route, Routes,Outlet } from "react-router-dom";
 
import Login from "../pages/Login";
import ChatRoom from "../pages/ChatRoom";

const MainLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};
const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Login />} />
                    <Route path="Home" element={<ChatRoom />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;
