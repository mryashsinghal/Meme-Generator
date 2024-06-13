import React from 'react'
import logo1 from './images/meme.png'


export default function Head() {
    return <div className='Header'>
        <img className='head--img' src={logo1} />
        <h1>Meme Generator</h1>
        <h4>Generate For Free</h4>
    </div>
}