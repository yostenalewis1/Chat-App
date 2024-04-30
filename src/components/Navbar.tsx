import { useDispatch } from "react-redux";
import { setName } from "../app/features/userSlice";

 

const Navbar = () => {
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(setName(''));
    }
    return ( 
        <div className="navbar bg-violet-600 text-neutral-content"> 
            <div className="containerWrap flex justify-between">
            <a className=" text-xl text-white">Chat app</a>
            <button className="btn btn-ghost text-xl" onClick={logout}>
                Logout
            </button>
            </div>
        </div>
       
 
    );
};

export default Navbar;
