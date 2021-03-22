import React from 'react'
import './Header.css'

export default function Header(props) {
    return (
        <header className='hero-container'>
            <div className="header-main">
                <video src={props.video} autoPlay loop muted />
                <div className="overlay" />
                <div className="hero-content">
                    <div id="wrapper">
                        <h1>{props.title}</h1>
                        <p></p>
                    </div>
                </div>
            </div>
        </header>
    )
}
