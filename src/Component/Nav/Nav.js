import React, { Component } from 'react'
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,  
    // Link,

    NavLink
} from "react-router-dom";
export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="/home">Web News</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        {/* <a className="nav-link js-scroll-trigger" href="/news">TIN TỨC</a> */}
                        <NavLink to="/home" activeClassName="selected" className="nav-link js-scroll-trigger">TIN TỨC</NavLink>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link js-scroll-trigger" href="/detail">CHI TIẾT</a> */}
                        <NavLink to="/details" activeClassName="selected" className="nav-link js-scroll-trigger">Chi tiết</NavLink>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link js-scroll-trigger" href="/contract">LIÊN HỆ</a> */}
                        <NavLink to="/contacts" activeClassName="selected" className="nav-link js-scroll-trigger">LIÊN HỆ</NavLink>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}
