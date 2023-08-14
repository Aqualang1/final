import { useState } from 'react';
import Input from '../../components/Input/Input';
import BtnLogin from '../../components/Button/Button';
import TopLogo from '../../assets/rozetka.svg';
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import './Login.css'



const Login = () => {

    const [isViewPassword, setViewPassword] = useState(false);
    const [isLoginError, setLoginError] = useState(false);
    const [isPasswordError, setPasswordError] = useState(false);
    const [isFormError, setFormError] = useState(false)

    const passwordError = () => setPasswordError(true);
    const loginError = () => setLoginError(true);
    const formError = () => setFormError(!isFormError);
    const passwordToggler = () => setViewPassword(!isViewPassword);
    const submitter = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        setLoginError(false);
        setPasswordError(false);
        setFormError(false);


        const username = formData.get('username').trim();
        const password = formData.get('password').trim();
        if (username === 'admin' && password === '54321') {
            localStorage.setItem("token", 'thisIsToken');
        } else {
            if (username.length && password.length) {
                formError();
            } else {
                if (!username.length) {
                    loginError();
                }
                if (!password.length) {
                    passwordError();
                }
            }
        }
    }


    return <form onSubmit={submitter} className='login' id='form'>

        <img src={TopLogo} alt='Logo' />
        <Input type='text' name="username" id='userName' placeholder="User Name" className="username" />
        <label className='errorInput' htmlFor="username" hidden={!isLoginError}>login is empty</label>

        <div id='showPassword'>
            <Input type={isViewPassword ? "text" : "password"} name="password" id="password" placeholder="Password" className="password" />
            <button id='show' type='button' onClick={passwordToggler}>{isViewPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}</button>
        </div>
        <label htmlFor="password" className='errorInput' hidden={!isPasswordError}>password is empty</label>

        <BtnLogin />
        <label htmlFor="form" className='errorInput' hidden={!isFormError}>Invalid data</label>

    </form>
}

export default Login;