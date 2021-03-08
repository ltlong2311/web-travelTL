import React from 'react'

function NavForum() {
    return (
        <div>
             <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: '#212529'}}>
                <div className="container">
                    <a className="navbar-brand" href=" #">TL Forum</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                        <a className="nav-link" href=" #">Mới cập nhật <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href=" #">Mới đăng</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href=" #">Nhiều lượt xem</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href=" #" id="dropdownId" data-toggle="dropdown" ariaHaspopup="true" aria-expanded="false">Bài của tôi</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href=" #">Bài đăng của tôi</a>
                            <a className="dropdown-item" href=" #">Bài tôi theo dõi</a>
                        </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Tìm kiếm" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="icon-search fas fa-search"></i></button>
                    </form>
                    <button className="btn btn-outline-success my-2 my-sm-0 ml-2" type="submit"><i class="fas fa-edit"></i></button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavForum
