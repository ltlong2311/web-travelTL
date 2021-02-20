import React from 'react'
import './Header.css'

export default function Header(props) {
    return (
        <header className='hero-container'>
            <div className="header-main">
                <video src='/videos/video.mp4' autoPlay loop muted />
                <div className="hero-content">
                    <div id="wrapper">
                        <h1>{props.title}</h1>
                        <div className="inputSearch">
                            <form action="/Search" method="get">
                                <div className="title-slide" >
                                    <div className='icon-place'><i className="fas fa-map-marker-alt" /></div>
                                    <input type="text" placeholder=" Tìm kiếm địa điểm, tour và tin tức...  " name="key" />
                                    <div type="submit" className="btn btn-primary" id="search" >Tìm Kiếm</div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
