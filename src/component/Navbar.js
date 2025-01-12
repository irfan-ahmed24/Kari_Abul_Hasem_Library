import React from 'react'
import { Link } from 'react-router-dom'

import "./Navbar.css"

export default function Navbar() {
    return (
        <div>
            <nav className='Navbar'>
                <Link to="/" className='home nav'>Home</Link>
                <Link to="/Books" className='books nav'>Books</Link>
                <Link to="/Signup" className='signup nav'>Sign Up</Link>
                <Link to="/Login" className='login nav'>Login</Link>
            </nav>
        </div>
    )
}
