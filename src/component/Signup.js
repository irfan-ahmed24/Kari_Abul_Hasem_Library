import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'

import "./Signup.css"

export default function Signup() {
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            password: '',
            Confirm: ''
        },
        onSubmit: (value, { resetForm }) => {
            console.log(value)
            resetForm(value = '')
        }
    })
    return (
        <>
            <div className='container'>
                <div className='bg'>
                    <h1>Sign Up</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='form-group'>
                            <input type='text'
                                className='form-control'
                                id='name'
                                placeholder='Username..'
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <input type='number'
                                className='form-control'
                                id='phone'
                                placeholder='Enter your phone number..'
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                                required />
                        </div>
                        <div className='form-group'>
                            <input type='email'
                                className='form-control'
                                id='email'
                                placeholder='Enter your email..'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                required />
                        </div>
                        <div className='form-group'>
                            <input type='password'
                                className='form-control'
                                id='password'
                                placeholder='Enter your password..'
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                required />
                        </div>
                        <div className='form-group'>
                            <input type='password'
                                className='form-control'
                                id='Confirm'
                                placeholder='Confirm password..'
                                onChange={formik.handleChange}
                                value={formik.values.Confirm}
                                required />
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
