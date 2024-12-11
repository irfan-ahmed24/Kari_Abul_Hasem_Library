import React from 'react'
import Home from './component/Home'
import Books from './component/Books'

export default function App() {
  return (
    <div className='body'>
      <navbar>
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Books">Books</a></li>
          <li><a href="#Home">Sign in</a></li>
          <li><a href="#Home">Login</a></li>
        </ul>
      </navbar>
      <Home />
      <Books />
      <div className='wave wave-1'></div>
      <div className='wave wave-2'></div>
      <div className='wave wave-3'></div>
      <div className='wave wave-4'></div>
    </div>
  )
}
