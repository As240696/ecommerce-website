import React from 'react';
import "./Register.css";

function Register() {
  return (
    <div className='Register-container'>
        <h1 className='logo'>LAMA</h1>
        <div className='Register-wrapper'>
            <h1>CREATE AN ACCOUNT</h1>
            <form>
                <input placeholder='First Name'/>
                <input placeholder='Last Name'/>
                <input placeholder='Username'/>
                <input placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <input type="password" placeholder='Confirm Passowrd'/>
                <span>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY.</b>
                </span>  
                <button>CREATE</button>
            </form>
        </div>
    </div>
  )
}

export default Register;