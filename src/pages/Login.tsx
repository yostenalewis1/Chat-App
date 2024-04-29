import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { socket } from "../socket/socket";
import { useDispatch } from 'react-redux';
import pic1 from '../assets/pic1.png';
import { setName } from '../app/features/userSlice';

const Login = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (username.trim() === '') {
            alert('Please enter your name');
            return;
        }
        socket.emit('enterYourName', username);
        dispatch(setName(username));
        navigate('/Home');
    };
    
    return (
        <> 
         <div className="text-violet-600 text-[32px] font-sans ml-8 mt-2 ">chatapp</div>
          <div className="text-center mt-10 ">
          <span className="text-violet-600 text-2xl font-semibold font-serif ">Welcome to chatapp 💬</span>
          <div className="text-center text-violet-600 text-xl font-normal font-serif pt-3">Send and receive massages and enjoy getting in touch </div>
          <img src={pic1} alt="pic1" className="w-[265px] h-64 mt-6 m-auto"/>

              <div className="text-center mt-6 flex flex-col w-[300px] m-auto">
                <input type="text" placeholder="Enter your name" className="border-2 border-violet-600 rounded-lg px-4 py-2 mb-3 w-80" value={username} onChange={handleChange} />
                <button className="bg-violet-600 text-white font-semibold text-xl px-4 py-2 rounded-lg w-80" type='submit' onClick={handleSubmit}>Join us now</button>
            </div>
         </div>
        </>
    );
}

export default Login;
