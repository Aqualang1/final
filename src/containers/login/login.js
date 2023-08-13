import { useState } from 'react';
import Input from '../../components/Input/Input';
import BtnLogin from '../../components/Button/Button';
import TopLogo from '../../assets/rozetka.svg';
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import './Login.css'



const Login = () => {
    const [isViewPassword, setViewPassword] = useState(false);

    const passwordToggler = () => setViewPassword(!isViewPassword);

    return <form className='login'>
        <img src={TopLogo} alt='Logo' />
        <Input type='text' id='userName' placeholder="User Name" className="username" />
        <label id='showPassword'>
            <Input type={isViewPassword ? "text" : "password"} id="password" placeholder="Password" className="password" />
            <button id='show' type='button' onClick={passwordToggler}>{isViewPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}</button>
        </label>

        <BtnLogin />
    </form>
}

export default Login;