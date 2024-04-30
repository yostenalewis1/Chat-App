import { useDispatch, useSelector } from "react-redux";
import { setName } from "../app/features/userSlice";
import { socket } from "../socket/socket";
import { RootState } from "../app/store";

 

const Navbar = () => {
    const dispatch = useDispatch();
    const {name} = useSelector((state: RootState) => state.user);
    const logout = () => {
        socket.disconnect();
        dispatch(setName(''));
    }
    return ( 
        <div className="bg-violet-600 text-neutral-content flex justify-between items-center p-4 h-10">
            <p className="text-lgtext-white">Chat app, {name}</p>
            <button className="btn btn-ghost text-lg" onClick={logout}>
                Logout
            </button>
        </div>
       
 
    );
};

export default Navbar;
