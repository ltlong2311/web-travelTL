import React from 'react'
import {Link} from "react-router-dom";
function NavForum() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#212529'}}>
                <div className="container">
                    <Link to="/forum" className="navbar-brand">TL Forum</Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-ellipsis-v"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" data-target="#forum" to="/forum/">Mới cập nhật <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/forum/" href="/recently-posted">Mới đăng</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/forum/" href="/most-views">Nhiều lượt xem</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/forum/" id="dropdownId" data-toggle="dropdown" aria-expanded="false">Bài của tôi</Link>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <Link className="dropdown-item" data-target="#my-post"  to="/forum/my-post">Bài đăng của tôi</Link>
                                <Link className="dropdown-item" to="/forum/">Bài tôi theo dõi</Link>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="col form-control mr-sm-2" type="text" placeholder="Tìm kiếm" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="icon-search fas fa-search"></i></button>
                    </form>
                    <Link to="/forum/create" id="btn-edit" className="btn btn-outline-success my-2 my-sm-0 ml-2" name="editPost" role="button"><i className="fas fa-edit" /></Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavForum;
