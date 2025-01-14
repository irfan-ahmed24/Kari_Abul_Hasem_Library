import React from 'react'
import { Link } from 'react-router-dom'

import "./Signup.css"

export default function Signup() {
    return (
        <>
            <div className='container'>
                <div className='bg'>
                    <h1>Sign Up</h1>
                    <form>
                        <div className='form-group'>
                            <input type='text' className='form-control' id='name' placeholder='Username..' required />
                        </div>
                        <div className='form-group'>
                            <input type='number' className='form-control' id='email' placeholder='Enter your phone number..' required />
                        </div>
                        <div className='form-group'>
                            <input type='email' className='form-control' id='email' placeholder='Enter your email..' required />
                        </div>
                        <div className='form-group'>
                            <input type='password' className='form-control' id='password' placeholder='Enter your password..' required />
                        </div>
                        <div className='form-group'>
                            <input type='password' className='form-control' id='Confirm' placeholder='Confirm password..' required />
                        </div>
                        <button type='submit' className='btn btn-primary'>Sign Up</button>
                        <p>Or</p>
                        <div className='or'>
                            <p>Already Register? </p>
                            <Link to="/Login" className='login'> Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
