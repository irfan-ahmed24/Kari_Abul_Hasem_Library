import React from 'react'
import { Link } from 'react-router-dom'


import './Login.css'

export default function Login() {
    return (
        <div className='loginconainer'>
            <div className='loginbg'>
                <h1>Login</h1>
                <form>
                    <div className='from-group'>
                        <input type="text"
                            placeholder="Username"
                            name='username'
                            className='form-control'
                            id='username'
                            required />
                    </div>
                    <div className='form-group'>
                        <input type="password"
                            placeholder="Password"
                            name='Password'
                            className='form-control'
                            id='Password'
                            required />
                    </div>
                    <button type="submit" className='loginbtn'>Login</button>
                    <p>Or</p>
                    <div className='signup'>
                        <p>Don't have any account?</p>
                        <Link to="/Signup" className='signup'> Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
