import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Input from '../../components/Input/Input';
import BtnLogin from '../../components/Button/Button';
import TopLogo from '../../assets/rozetka.svg';
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import './Login.css'



const Login = () => {

    const [isViewPassword, setViewPassword] = useState(false);
    const [showLoginError, setShowLoginError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);
    const [isFormError, setFormError] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();



    const passwordToggler = () => setViewPassword(!isViewPassword);

    const usernameChange = (event) => {
        setUsername(event.target.value);
        if (event.target.value) {
            setShowLoginError(false);
        } else {
            setShowLoginError(true);
        }
    }

    const passwordChange = (event) => {
        setPassword(event.target.value);
        if (event.target.value) {
            setShowPasswordError(false);
        } else {
            setShowPasswordError(true);
        }
    }

    const handleSumbit = (event) => {
        event.preventDefault();
        setFormError(false);



        if (username === 'admin' && password === '54321') {
            localStorage.setItem("token", 'thisIsToken');
            navigate('/productTable');

        } else {
            if (username.length && password.length) {
                setFormError(true);
            }
        } if (!username) {
            setShowLoginError(true);
        }
        if (!password) {
            setShowPasswordError(true);
        }
    }


    return <form onSubmit={handleSumbit} className='login' id='form'>

        <img src={TopLogo} alt='Logo' />
        <Input
            className="username"
            id='userName'
            name="username"
            placeholder="User Name"
            onChange={usernameChange}
            type='text'
            value={username}
        />
        <label
            className='errorInput'
            htmlFor="username"
            hidden={!showLoginError}
        >
            login is empty
        </label>

        <div id='showPassword'>
            <Input
                className="password"
                id="password"
                name="password"
                placeholder="Password"
                type={isViewPassword ? "text" : "password"}
                value={password}
                onChange={passwordChange}
            />
            <button
                id='show'
                type='button'
                onClick={passwordToggler}
            >
                {isViewPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
            </button>
        </div>
        <label
            htmlFor="password"
            className='errorInput'
            hidden={!showPasswordError}
        >
            password is empty
        </label>

        <BtnLogin />
        <label
            htmlFor="form"
            className='errorInput'
            hidden={!isFormError}
        >
            Invalid data
        </label>

    </form>
}

export default Login;