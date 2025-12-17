import React from 'react'
import Header from '../components/Header'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setConfirmPassword] = useState('')
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [dob, setDOB] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(lname, fname, dob, email, password);
        if (password !== passwordConfirm) {
            alert("Password does not match!");
            return;
        }
        try{
            const res = await fetch(
                "https://webdevbackend-azfta6breyh2enh2.australiaeast-01.azurewebsites.net/users/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(
                        {
                            "fname": fname,
                            "lname": lname,
                            "dob": dob, 
                            "email": email,
                            "password": password
                        }
                    ),
                }
            )
            const data = await res.json();

            if (!res.ok){
                throw new Error(data.detail || "Signup failed");
            }
            alert("Signup successful!");
            console.log(data);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            console.log("Done");
        }
    }

    return (
        <>
            {/* <ButtonTest/> */}
            <Header />
            <form onSubmit={handleLogin}>
                First Name <br />
                <input type='text' placeholder="Enter your first name" values={fname} onChange={(e) => setFName(e.target.value)}/><br />
                Last Name <br />
                <input type='text' placeholder="Enter your last name" values={lname} onChange={(e) => setLName(e.target.value)} /> <br />
                Date of Birth <br/>
                <input type='date' value={dob} onChange={(e) => setDOB(e.target.value)}/> <br />
                Email <br/>
                <input type='text' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                Password <br />
                <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                Confirm your password <br/>
                <input type='password' placeholder='Confirm your password' value={passwordConfirm} onChange={(e) => setConfirmPassword(e.target.value)}/> <br/>
                <button type='submit'>Sign Up</button> <br />
                <Link to="/Login">Login</Link>
            </form>
        </>
    )
}

export default SignUp