import React from 'react';
import "./Login.css";

function Login() {
  return (
    <div className='Login-container'>
        <h1 className='logo'>LAMA</h1>
        <div className='Login-wrapper'>
            <h1>SIGN IN</h1>
            <form>
                <input placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <button>LOGIN</button>
                <div>
                    <a href='#top'>Forgot Password</a>
                    <a href='#top'>Create a new account</a>
                </div>               
            </form>
        </div>
    </div>
  )
}

export default Login;