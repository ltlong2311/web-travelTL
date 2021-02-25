import React, { useState } from "react";
// import {
//     // BrowserRouter as Router,
//     // Switch,
//     // Route,
//     Link,

//     NavLink
// } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./Nav.css";
// import ScrollspyNav from "react-scrollspy-nav";

export default function Nav() {
  const [navbar, setNavbar] = useState(false);

  const changeBackgroundNavbar = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackgroundNavbar);
  return (
    // <nav className={navbar ? 'navbar navbar-light navbar-expand-lg fixed-top' : 'navbar navbar-light default navbar-expand-lg fixed-top'}>
    <nav
      className={
        navbar
          ? "navbar navbar-expand-lg navbar-light fixed-top navbar-shrink stick-top"
          : "navbar navbar-expand-lg navbar-light fixed-top stick-top"
      }
      id="mainNav"
    >
      <div className="container-fluid">
        <a href="/home">
          <h2 className="slide-content">Travel TL</h2>
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-header">
            <li className="nav-item">
              {/* <a className="nav-link js-scroll-trigger" href="#intro">GIỚI THIỆU</a> */}
              <Link smooth to="/#intro" data-target="#intro" className="nav-link js-scroll-trigger">
                GIỚI THIỆU
              </Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link js-scroll-trigger" href="#destination">ĐIỂM ĐẾN</a> */}
              <Link
                smooth to="/#destination"
                className="nav-link js-scroll-trigger"
                data-target="#destination" 
              >
                ĐIỂM ĐẾN
              </Link>
              <div className="sub-menu responsible">
               
              </div>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link js-scroll-trigger" href="#tour">TOUR</a> */}
              <Link smooth to="/#tour-favorite" data-target="#tour-favorite" className="nav-link js-scroll-trigger">
                TOUR
              </Link>
              <div className="sub-menu responsible">
                <div className="row">
                  <div className="col-md-12">
                    <ul>
                      <li>
                        <Link smooth to="/#tour-favorite" data-target="#tour-favorite" className="nav-link">
                          <img src="img/icon-menu/icon-tour1.png" alt="" className="icon-nav" /> TOUR YÊU THÍCH
                        </Link>
                      </li>
                      <li>
                        <Link smooth to="/#tour-recommend" data-target="#tour-recommend" className="nav-link">
                          <img src="img/icon-menu/icon-tour2.png" alt="" className="icon-nav" /> TOUR ĐỀ CỬ
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link js-scroll-trigger" href="#news">TIN TỨC</a> */}
              <Link
                smooth to="/#news"
                data-target="#news"
                className="nav-link js-scroll-trigger"
              >
                TIN TỨC
              </Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link js-scroll-trigger" href="#subscribe">THEO DÕI</a> */}
              <Link
                smooth to="/#subscribe"
                data-target="#subscribe"
                className="nav-link js-scroll-trigger"
              >
                THEO DÕI
              </Link>
            </li>
            
            

          </ul>
          

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {/* <a className="nav-link js-scroll-trigger" href="#contacts"> LIÊN HỆ</a> */}
              <Link
                to="/contacts"
                className="nav-link"
                data-target="#contacts"
              >
                <i className="fas fa-fax"></i> LIÊN HỆ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/images"
                className="nav-link js-scroll-trigger"
                data-target="#"
              >
                <i className="fas fa-users"></i>DIỄN ĐÀN
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-link js-scroll-trigger"
              >
                <i className="fas fa-sign-in-alt"></i> ĐĂNG NHẬP
              </Link>
            </li>
            {/* <li className="nav-item">
                <NavLink to="/register" activeClassName="selected" className="nav-link js-scroll-trigger"><i className="fas fa-edit"></i>  ĐĂNG KÝ</NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
