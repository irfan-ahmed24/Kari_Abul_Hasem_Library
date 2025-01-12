import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Home from './component/Home'
import Books from './component/Books'
import Login from './component/Login'
import Signup from './component/Signup'
import Navbar from './component/Navbar'
import Error from './component/Error'

export default function App() {
  return (
    <div className='body'>
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/Books' element={<Books />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
