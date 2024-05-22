import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import React from 'react';
import {  useState } from 'react';
import { useEffect } from 'react';

function Login(){
    const navigate=useNavigate();
    useEffect(() => {
        const user = localStorage.getItem('token')
        if(user){
            navigate('/Dashboard')
        }
    })
    const [errorText, setErrorText]=useState('')
    const[token, setToken]=useState(null)
    const[loginform, setLoginForm]=useState({
        user:'',
        pwd:''
    })
    const handleLoginChange=(e)=>{
        const {name, value}=e.target
        setLoginForm({...loginform,[name]:value})
    }
    const onLoginSubmit=(e)=>{
        e.preventDefault()
        if(loginform.user=="Anju@gmail.com" && loginform.pwd=="Anju@123"){
            alert("Login Sucessfull !!")
            let userToken='abcd'
            setToken(userToken)
            localStorage.setItem('token', userToken)
            navigate('/Dashboard')
        }
        else{
            if(loginform.user!="Anju@gmail.com" && loginform.pwd!="Anju@123"){
                setErrorText("Wrong Credentials")
                setLoginForm({
                    user:'',
                    pwd:''
                })
            }
            else if(loginform.user=="Anju@gmail.com" && loginform.pwd!="Anju@123"){
                setErrorText("Wrong Password")
                setLoginForm({
                    pwd:''
                })
            }
            else if(loginform.user!="Anju@gmail.com" && loginform.pwd=="Anju@123"){
                setErrorText("Wrong Username")
                setLoginForm({
                    user:''
                })
            }
            setTimeout(()=>{
                setErrorText('')
            }, 3000)
        }
    }


    return(
        <div className='login'>
        <img src='https://media.istockphoto.com/id/1323545403/vector/abstract-blue-light-defocused-gradient-vector-background.jpg?s=612x612&w=0&k=20&c=O9Wfys2IJm654iIhLuwixw89IZHlVHn5U2zftwLYST8=' />
        <div className='log'>
            <div className="hea">
                <h1>Login Form</h1>
            </div>
            <div className='but'>
                <Link to='/Login'  className='button1'>Login</Link>
                <Link to='/Signup' className='button1'>SignUp</Link>
            </div>
            <form onSubmit={onLoginSubmit}>
                <input type='email' placeholder='Email Address' name='user' value={loginform.user} onChange={handleLoginChange} />
                <input type='password' placeholder='Password' name='pwd' value={loginform.pwd} onChange={handleLoginChange} />
                <Link to='/Forgot' className='link'>Forgot Password</Link>
                <div className='err'>
                     <p>{errorText}</p>
                </div>
                <input type='submit' value="Login"/>
                <span>Not a member?</span>
                <Link to='/Signup' className='link'>Signup Now</Link>
            </form>
        </div>
    </div>
    );
}
export default Login;
