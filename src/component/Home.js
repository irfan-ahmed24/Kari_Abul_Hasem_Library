import React from 'react'
import Marquee from 'react-fast-marquee'

import './Home.css'
export default function Home() {
    return (
        <div id='Home'>
            <Marquee><h1>কারী আবুল হাসেম লাইব্রেরি</h1></Marquee>
            <div className='wave wave-1'></div>
            <div className='wave wave-2'></div>
            <div className='wave wave-3'></div>
            <div className='wave wave-4'></div>
        </div >
    )
}
