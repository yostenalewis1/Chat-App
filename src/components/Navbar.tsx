import { useDispatch } from "react-redux";
import { setName } from "../app/features/userSlice";

 

const Navbar = () => {
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(setName(''));
    }
    return ( 
        <div className="bg-violet-600 text-neutral-content flex justify-between items-center p-4 h-10">
            <p className="text-lgtext-white">Chat app</p>
            <button className="btn btn-ghost text-lg" onClick={logout}>
                Logout
            </button>
        </div>
       
 
    );
};

export default Navbar;
