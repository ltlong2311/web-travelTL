// import { NavLink } from "react-router-dom";
// import ScrollspyNav from "react-scrollspy-nav";
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Nav.css";

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
    <nav
      className={
        navbar
          ? "navbar navbar-expand-lg navbar-light fixed-top stick-top navbar-shrink"
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
              {/* <a className="nav-link" href="#intro">GIỚI THIỆU</a> */}
              <Link
                smooth
                to="/#intro"
                data-target="#intro"
                className="nav-link js-scroll-trigger"
              >
                GIỚI THIỆU
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth
                to="/#destination"
                className="nav-link js-scroll-trigger"
                data-target="#destination"
                offset={70}
              >
                ĐIỂM ĐẾN
              </Link>
              <div className="sub-menu destinations">
                <div className="row destinations-list">
                  <div className="col-2 destinations-item">
                    <Link
                      to="/destinations"
                      className="nav-link dest"
                    > 
                      <span>VIETNAM</span>
                      <img
                        src="/img/vietnam8.jpg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="col-2 destinations-item">
                    <Link
                      to="/destinations"
                      className="nav-link dest"
                    > 
                      <span>MYANMAR</span>
                      <img
                        src="/img/myanmar.jpg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="col-2 destinations-item">
                    <Link
                      to="/destinations"
                      className="nav-link dest"
                    > 
                      <span>LAOS</span>
                      <img
                        src="/img/laos3.jpg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="col-2 destinations-item">
                    <Link
                      to="/destinations"
                      className="nav-link dest"
                    > 
                      <span>CAMBODIA</span>
                      <img
                        src="/img/cambodia3.jpg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="col-2 destinations-item">
                    <Link to="/destinations" className="nav-link dest"> 
                      <span>SINGAPORE</span>
                      <img src="/img/singapore.jpg" alt=""/>
                    </Link>
                  </div>
                  <div className="col-2 destinations-item">
                    <Link to="/destinations" className="nav-link dest"> 
                      <span>INDONESIA</span>
                      <img src="/img/indonesia4.jpg" alt=""/>
                    </Link>
                  </div>
                  <div className="col-2 destinations-item">
                    <Link to="/destinations" className="nav-link dest"> 
                      <span>THAILAND</span>
                      <img src="/img/thailand3.jpg" alt=""/>
                    </Link>
                  </div>
                  <div className="col-2 destinations-item">
                    <Link to="/destinations" className="nav-link dest"> 
                      <span>JAPAN</span>
                      <img src="/img/japan4.jpg" alt=""/>
                    </Link>
                  </div>
                  <div className="col-2 destinations-item">
                    <Link to="/destinations" className="nav-link dest"> 
                      <span>CHINA</span>
                      <img src="/img/china.jpg" alt=""/>
                    </Link>
                  </div>
                  <div className="col-2 destinations-item">
                    <Link to="/destinations" className="nav-link dest"> 
                      <span>MALAYSIA</span>
                      <img src="/img/malaysia.jpg" alt=""/>
                    </Link>
                  </div>
                  <div className="col-4 destinations-item">
                    <Link to="/destinations" className="nav-link dest"> 
                      <span>MULTI COUNTRY</span>
                      <img src="/img/multi-country-2.jpg" alt=""/>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link
                smooth
                to="/#tour-favorite"
                data-target="#tour-favorite"
                className="nav-link js-scroll-trigger"
              >
                TOUR
              </Link>
              <div className="sub-menu tours">
                <div className="row">
                  <div className="col-md-12">
                    <ul>
                      <li>
                        <Link
                          smooth
                          to="/#tour-favorite"
                          data-target="#tour-favorite"
                          className="nav-link"
                        >
                          <img
                            src="/img/icon-menu/icon-tour1.png"
                            alt=""
                            className="icon-nav"
                          />{" "}
                          TOUR YÊU THÍCH
                        </Link>
                      </li>
                      <li>
                        <Link
                          smooth
                          to="/#tour-recommend"
                          data-target="#tour-recommend"
                          className="nav-link"
                        >
                          <img
                            src="/img/icon-menu/icon-tour2.png"
                            alt=""
                            className="icon-nav"
                          />{" "}
                          TOUR ĐỀ CỬ
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link
                smooth
                to="/#news"
                data-target="#news"
                className="nav-link js-scroll-trigger"
              >
                TIN TỨC
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth
                to="/#subscribe"
                data-target="#subscribe"
                className="nav-link js-scroll-trigger"
                offset={70}
              >
                THEO DÕI
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/contacts" className="nav-link" data-target="#contacts">
                <i className="fas fa-fax"></i> LIÊN HỆ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/forum"
                className="nav-link js-scroll-trigger"
                data-target="#forum"
              >
                <i className="fas fa-users"></i>DIỄN ĐÀN
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link js-scroll-trigger">
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
