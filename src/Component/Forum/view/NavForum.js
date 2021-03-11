import React from 'react'
import {Link} from "react-router-dom";
function NavForum() {
    return (
        <div>
             <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: '#212529'}}>
                <div className="container">
                    <Link to="/forum" className="navbar-brand">TL Forum</Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/forum/">Mới cập nhật <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/recently-posted">Mới đăng</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/most-views">Nhiều lượt xem</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <div to="/forum" className="nav-link dropdown-toggle" id="dropdownId" data-toggle="dropdown" aria-expanded="false">Bài của tôi</div>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <Link className="dropdown-item" to="/forum">Bài đăng của tôi</Link>
                                <Link className="dropdown-item" to="/forum">Bài tôi theo dõi</Link>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Tìm kiếm" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="icon-search fas fa-search"></i></button>
                    </form>
                    <Link to="/create" id="btn-edit" className="btn btn-outline-success my-2 my-sm-0 ml-2" name="editPost" role="button"><i className="fas fa-edit" /></Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavForum
