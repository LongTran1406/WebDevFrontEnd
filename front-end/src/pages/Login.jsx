import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ButtonTest from '../components/ButtonTest';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = (e) => {
        e.preventDefault();

        alert(`Email: ${email}\nPassword: ${password}`);
        console.log(email, password);
      };

    return(
        <>
            {/* <ButtonTest/> */}
            <Header/>
            <ButtonTest/>
            <form onSubmit={handleLogin}>
                Email
                <br />
                <input type='text' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <br/>
                Password
                <br />
                <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <button type='submit'>Login</button>
                <br />
                <Link to="/signup">Sign Up</Link>
            </form>
        </>
    )
}

export default Login