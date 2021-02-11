import React, { useState } from 'react'
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,  
    // Link,

    NavLink
} from "react-router-dom";
import './Nav.css';

export default function Nav() {
    const [navbar,setNavbar] = useState(false);

    const changeBackgroundNavbar = () => {
        // console.log(window.scrollY);
        if(window.scrollY >= 80){
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    
    window.addEventListener('scroll', changeBackgroundNavbar);
    return (
        // <nav className={navbar ? 'navbar navbar-light navbar-expand-lg fixed-top' : 'navbar navbar-light default navbar-expand-lg fixed-top'}>
        <nav className={navbar ? 'navbar navbar-expand-lg navbar-light fixed-top navbar-shrink' : 'navbar navbar-expand-lg navbar-light fixed-top' } id="mainNav">
            <div className="container-fluid">
                <h2 className="slide-content" href="/home">Travel TL</h2>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-header">
                        <li className="nav-item">
                            <NavLink to="/home" activeClassName="selected" className="nav-link js-scroll-trigger">GIỚI THIỆU</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/tour" activeClassName="selected" className="nav-link js-scroll-trigger">TOUR</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link js-scroll-trigger" href="/news">TIN TỨC</a> */}
                            <NavLink to="/home" activeClassName="selected" className="nav-link js-scroll-trigger">TIN TỨC</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/images" activeClassName="selected" className="nav-link js-scroll-trigger">HÌNH ẢNH</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/videos" activeClassName="selected" className="nav-link js-scroll-trigger">VIDEO</NavLink>
                        </li>
                        
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to="/contacts" activeClassName="selected" className="nav-link js-scroll-trigger"><i className="fas fa-fax"></i>  LIÊN HỆ</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login" activeClassName="selected" className="nav-link js-scroll-trigger"><i className="fas fa-user"></i>  ĐĂNG NHẬP</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/register" activeClassName="selected" className="nav-link js-scroll-trigger"><i className="fas fa-edit"></i>  ĐĂNG KÝ</NavLink>
                        </li>
                        
                    </ul>
            </div>
            </div>
        </nav>
    )
}
